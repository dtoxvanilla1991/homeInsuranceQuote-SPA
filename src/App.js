import Navigation from "./components/Navbar/Navbar";
import React, { useState, lazy, useEffect } from "react";
import useFetch from "react-fetch-hook";
import AddonsCard from "./components/AddonsCard/AddonsCard";
import Footer from "./components/Footer/Footer";
import { Route, Routes } from "react-router-dom";
import GetNewQuote from "./Pages/NewQuote/GetNewQuote";
import Default404 from "./Pages/NotFound/Default404";
import loadingGif from "./assets/loading.gif";
import styles from "./App.module.css";
// import { fetchingData } from "./services";
import { useSelector, useDispatch } from "react-redux";
import { FetchUserData } from "./actions/userDataActions";

function App() {
  // const [userData, setData] = useState(null);
  const [addons, setAddons] = useState(null);
  let [quotePrice, setPrice] = useState(null);
  const [priceChange, setPriceChange] = useState(false);
  const [loading, setLoading] = useState(false);
  // const [error, setError] = useState(null);
  const dispatch = useDispatch();
  useEffect(() => {
    // console.log('HERE')
    dispatch(FetchUserData());
  }, [dispatch]);
  const { isLoading, addonsError, data } = useFetch(
    "http://localhost:4500/addons"
  );
  //getting all the data from the state:
  const userData = useSelector(state => state.userData);

  if (loading || isLoading) return <img className="loading" src={loadingGif} alt="loading..." />;

  if (addonsError) {
    return (
      <div>
        <p>Code: ${addonsError.status}</p>
        <p>Message: ${addonsError.statusText}</p>
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
        !addon.active
          ? styles.addonsCardSelected
          : styles.addonsCardNotSelected;
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
  }
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

  //lazing loading necessary files:
  const About = lazy(() => import("./Pages/About/About"));
  const Billing = lazy(() => import("./Pages/Billing/Billing"));
  const ContactUs = lazy(() => import("./Pages/ContactUs/Contactus"));
  const LoginSignup = lazy(() => import("./Pages/LoginSignup/LoginSignup"));
  const Main = lazy(() => import("./Pages/Main/Main"));

  return (
    <>
      <Navigation />
      <div className={styles.pageWrapper}>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route
            path="/newquote"
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
          <Route path="/login" element={<LoginSignup />} />
          <Route path="/billing" element={<Billing />} />
          <Route path="/contactus" element={<ContactUs />} />
          <Route path="*" element={<Default404 />} />
        </Routes>
        <Footer />
      </div>
    </>
  );
}

export default App;
