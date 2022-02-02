import QuoteCard from '../QuoteCard/QuoteCard';
import PriceCard from '../PriceCard/PriceCard';
import classes from './Header.module.css';


const Header = ({userData, price, onToggle}) => {

    return (
        <header className={classes.header}>
            <QuoteCard data={userData}/>
            <PriceCard onToggle={onToggle} price={price}/>
        </header>
    )
}

export default Header
