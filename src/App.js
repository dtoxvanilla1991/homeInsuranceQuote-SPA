import Header from "./components/Header";
import Navigation from "./components/Navbar";
import {PageWrapper} from './components/styles';
import Body from "./components/Body";
import { useState, useEffect } from 'react';
import useFetch from "react-fetch-hook";
import AddonsCard from "./components/AddonsCard";

function App() {
  const [userData, setData] = useState(null);
  const [addons, setAddons] = useState(null);
  let [quotePrice, setPrice] = useState(null);
  const [priceChange, setPriceChange] = useState(false);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const {isLoading, addonsError, data } = useFetch("http://localhost:4500/addons");
  useEffect(()=> {
      fetch('http://localhost:4500/quote')
      .then(res => {
          if(res.ok){
              return res.json();
          }
          throw res;
      })
      .then(userData => setData(userData))
      .catch(err => {
          console.error("Error fetching data: ", err);
          setError(err);
      })
      .finally(() => setLoading(false));
  }, []);

  if(loading || isLoading) return "Loading...";
  if (error || addonsError) {
    return <div>
      <p>Code: ${error.status}</p>
      <p>Message: ${error.statusText}</p>
    </div>
  }
  if(!quotePrice){
    setPrice([userData[0].monthlyPrice, 'month']);
  }
    if(!addons){
  setAddons(data.map( (addon) => {
    let id = Math.floor(Math.random() * 10000) +1;
    addon.id = id;
    addon.active = true;
    return addon;
    }));
    }

// rendering all addons:
 const renderAddons = () => {

    return addons.map( (addon) => {
    let key = Math.floor(Math.random() * 10000) +1;
    return <AddonsCard key={key} details={addon} buttonTitle={!addon.active ? "Remove this addon" : 'Select this addon'} toggleExtras={toggleExtras} price={priceChange ? addon.annualPrice : addon.monthlyPrice} pricingUpdate={pricingUpdate} timeframe={priceChange ? 'year' : 'month'} onSelected={(id) => {setAddons(addons.map((addon) => addon.id === id ? {...addon, added: !addon.adeed} : addon))}} Selected={!addon.active ? "addonsCard-selected" : "addonsCard-notSelected"}/>;
    })
 }
//toggling monthly/yearly view:
 const togglePrice = () => {
  setAddons(data);
  setPriceChange(!priceChange);
  if(priceChange){
    setPrice([userData[0].monthlyPrice, 'month'])
  }else{
    setPrice([userData[0].annualPrice, 'year']);
  }

};
  //visually toggling active addons:
  const toggleExtras = (id) => {
    //visually selecting clicked addon card
    setAddons(addons.map((addon) => addon.id === id ? {...addon, active: !addon.active} : addon));
    }
  //calculating the total quote price:
  const pricingUpdate = (displayedAddonPrice, timeframe, id) => {
      let selected = addons.find(addon => addon.id === id);
      console.log(selected);
        if(selected.active === true){
          let newSum = Number((quotePrice[0] + displayedAddonPrice).toFixed(2));
          setPrice([newSum, timeframe]);
        } else if(selected.active === false){
          let newSum = Number((quotePrice[0] - displayedAddonPrice).toFixed(2));
          setPrice([newSum, timeframe]);
        }
      

  }

  return (
    <div className="container">
      <Navigation />
      <PageWrapper>
      <Header userData={userData} addonDetials={addons} onToggle={togglePrice} price={quotePrice}/>
      <Body data={data} toggleExtras={toggleExtras} renderAddons={renderAddons} pricingUpdate={pricingUpdate}/>
      </PageWrapper>
    </div>
  );
}

export default App;