import Button from "./Button";

const PriceCard = ({onToggle, price}) => {

    return (
        <div className="priceCard">
            <h1> £{price[0]}</h1>
            <h4>per {price[1]}</h4>
            <p className="smallText">This price includes Insurance Premium Tax at the
            <br/>
            current rate. No charge for paying monthly.</p>
            <div onClick={() => onToggle()}>
        <Button buttonTitle="Switch to annual" style={{padding: '1em 2em'}}/>
            </div>
        </div>
    )
}

export default PriceCard;
