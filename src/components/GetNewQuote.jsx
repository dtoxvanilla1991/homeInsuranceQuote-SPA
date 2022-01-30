import Body from "./Body";
import Header from "./Header";

const GetNewQuote = ({userData, addonDetials, onToggle, price, renderAddons}) => {
  return <div>
        <Header userData={userData} addonDetials={addonDetials} onToggle={onToggle} price={price} />
        <Body renderAddons={renderAddons} />
  </div>;
};

export default GetNewQuote;
