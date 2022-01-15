import Button from './Button';

const AddonsCard = ({buttonTitle, style, details, toggleExtras, price, timeframe, onSelected, Selected, pricingUpdate}) => {
    return (
        <div className={Selected}>
            <div className="cardTitle">
                <h4>{details.title}</h4>
                <p className="smallText">£{price} per {timeframe}</p>
            </div>
                <p className="smallText">{details.text}</p>
                <div className='buttonCard' onClick={()=>toggleExtras(details.id)}>
                    <div id={'selected-or-not'} onClick={() => onSelected(details.id)} >
                        <div id={"pricingChanges"} onClick={()=>pricingUpdate(price, timeframe, details.id)}>
                <Button style={style} buttonTitle={buttonTitle}/>
                        </div>
                    </div>
                </div>

        </div>
    )
}

export default AddonsCard;
