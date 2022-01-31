import Body from "../../components/Body/Body";
import Header from "../../components/Header/Header";

const GetNewQuote = ({userData, addonDetials, onToggle, price, renderAddons}) => {
  return <div>
        <Header userData={userData} addonDetials={addonDetials} onToggle={onToggle} price={price} />
        <Body renderAddons={renderAddons} />
  </div>;
};

export default GetNewQuote;
