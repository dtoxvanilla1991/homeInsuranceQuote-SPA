import Navigation from "./components/Navbar";
import { useState, useEffect } from "react";
import useFetch from "react-fetch-hook";
import AddonsCard from "./components/AddonsCard";
import Footer from "./components/Footer";
import About from "./components/About";
import { Route, Routes } from "react-router-dom";
import GetNewQuote from "./components/GetNewQuote";
import Default404 from "./components/Default404";
import loadingGif from './images/loading.gif';

function App() {
  const [userData, setData] = useState(null);
  const [addons, setAddons] = useState(null);
  let [quotePrice, setPrice] = useState(null);
  const [priceChange, setPriceChange] = useState(false);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const { isLoading, addonsError, data } = useFetch(
    "http://localhost:4500/addons"
  );
  useEffect(() => {
    fetch("http://localhost:4500/quote")
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
        throw res;
      })
      .then((userData) => setData(userData))
      .catch((err) => {
        console.error("Error fetching data: ", err);
        setError(err);
      })
      .finally(() => setLoading(false));
  }, []);

  if (loading || isLoading) return <img className="loading" src={loadingGif} alt="loading..." />;
  if (error || addonsError) {
    return (
      <div>
        <p>Code: ${error.status}</p>
        <p>Message: ${error.statusText}</p>
      </div>
    );
  }
  //getting original data:
  if (!quotePrice) {
    setPrice([userData[0].monthlyPrice, "month"]);
  }
  if (!addons) {
    setAddons(
      data.map((addon) => {
        let id = Math.floor(Math.random() * 10000) + 1;
        addon.id = id;
        addon.active = true;
        return addon;
      })
    );
  }

  // rendering all addons:
  const renderAddons = () => {
    return addons.map((addon) => {
      //calculating the total quote price:
      const pricingUpdate = (displayedAddonPrice, timeframe, id) => {
        let selectedAddonCard = addons.find((addon) => addon.id === id);

        if (selectedAddonCard.active === true) {
          let newSum = (Number(quotePrice[0]) + displayedAddonPrice).toFixed(2);
          setPrice([newSum, timeframe]);
        } else if (selectedAddonCard.active === false) {
          let newSum = (Number(quotePrice[0]) - displayedAddonPrice).toFixed(2);
          setPrice([newSum, timeframe]);
        }
      };
      //toggle annual-monthly:
      const priceDisplayed = () =>
        priceChange ? addon.annualPrice : addon.monthlyPrice;
      //toggle annual-monthly timeframe text:
      const timeDisplayed = () => (priceChange ? "year" : "month");
      //Button innerText:
      const buttonText = () =>
        !addon.active ? "Remove this addon" : "Select this addon";
      //Style of the selected card:
      const stylingCardToggle = () =>
        !addon.active ? "addonsCard-selected" : "addonsCard-notSelected";
      //Button innerText:
      const SelectedCard = (id) => {
        setAddons(
          addons.map((addon) =>
            addon.id === id ? { ...addon, added: !addon.added } : addon
          )
        );
      };
      let key = Math.floor(Math.random() * 10000) + 1;
      return (
        <AddonsCard
          key={key}
          details={addon}
          buttonTitle={buttonText()}
          toggleExtras={toggleExtras}
          price={priceDisplayed()}
          pricingUpdate={pricingUpdate}
          timeframe={timeDisplayed()}
          SelectedCard={() => SelectedCard()}
          Selected={stylingCardToggle()}
        />
      );
    });
  };
  //toggling monthly/yearly view on PriceCard:
  const togglePrice = () => {
    setAddons(data);
    setPriceChange(!priceChange);
    if (priceChange) {
      setPrice([userData[0].monthlyPrice, "month"]);
    } else {
      setPrice([userData[0].annualPrice, "year"]);
    }
  };

  //visually toggling active addons:
  const toggleExtras = (id) => {
    //visually selecting clicked addon card
    setAddons(
      addons.map((addon) =>
        addon.id === id ? { ...addon, active: !addon.active } : addon
      )
    );
  };

  return (
    <>
      <Navigation />
      <div className="PageWrapper">
        <Routes>
          <Route
            path="/"
            element={
              <>
                <GetNewQuote
                  userData={userData}
                  addonDetials={addons}
                  onToggle={togglePrice}
                  price={quotePrice}
                  renderAddons={renderAddons}
                ></GetNewQuote>
              </>
            }
          />
          <Route path="/about" element={<About />} />
          <Route path="*" element={<Default404 />} />
        </Routes>
        <Footer />
      </div>
    </>
  );
}

export default App;
