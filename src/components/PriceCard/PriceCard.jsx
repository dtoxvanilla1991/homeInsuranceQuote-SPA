import Button from "../Button/Button";
import classes from './PriceCard.module.css';

const PriceCard = ({onToggle, price}) => {

    let monthOrYear = price[1] === "month" ? "annual plan" : "monthly";

    return (
        <div className={classes.priceCard}>
            <h1> £{price[0]}</h1>
            <h4>per {price[1]}</h4>
            <p className={classes.smallText}>This price includes Insurance Premium Tax at the
            <br/>
            current rate. No charge for paying monthly.</p>
            <div onClick={() => onToggle()}>
        <Button buttonTitle={`Switch to ${monthOrYear}`} style={{padding: '1em 2em'}}/>
            </div>
        </div>
    )
}

export default PriceCard;
