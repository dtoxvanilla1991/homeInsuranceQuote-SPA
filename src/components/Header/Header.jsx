import QuoteCard from '../QuoteCard/QuoteCard';
import PriceCard from '../PriceCard/PriceCard';


const Header = ({userData, price, onToggle}) => {

    return (
        <header className="header">
            <QuoteCard data={userData}/>
            <PriceCard onToggle={onToggle} price={price}/>
        </header>
    )
}

export default Header
