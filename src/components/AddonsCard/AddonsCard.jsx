import Button from '../Button/Button';
import styles from './AddonsCard.module.css';


const AddonsCard = ({buttonTitle, style, details, toggleExtras, price, timeframe, SelectedCard, Selected, pricingUpdate}) => {
    return (
        <div className={Selected}>
            <div className={styles.cardTitle}>
                <h4>{details.title}</h4>
                <p className={styles.smallText}>£{price} per {timeframe}</p>
            </div>
                <p className={styles.smallText}>{details.text}</p>
                <div className={styles.buttonCard} onClick={()=>toggleExtras(details.id)}>
                    <div id='selected-or-not' onClick={() => SelectedCard(details.id)} >
                        <div id="pricingChanges" onClick={()=>pricingUpdate(price, timeframe, details.id)}>
                <Button style={style} buttonTitle={buttonTitle}/>
                        </div>
                    </div>
                </div>

        </div>
    )
}

// AddonsCard.propTypes ={
//     buttonTitle: PropTypes.string.isRequired,
//     details: PropTypes.object.isRequired,
//     toggleExtras: PropTypes.func.isRequired,
//     SelectedCard: PropTypes.func.isRequired,
//     pricingUpdate: PropTypes.func.isRequired,
//     price: PropTypes.number.isRequired,
//     timeframe: PropTypes.string.isRequired,
    
// }

export default AddonsCard;
