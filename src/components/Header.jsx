import QuoteCard from './QuoteCard';
import PriceCard from './PriceCard';


const Header = ({userData, price, addonDetials, onToggle}) => {

    return (
        <header className="header">
            <QuoteCard data={userData}/>
            <PriceCard onToggle={onToggle} price={price}/>
        </header>
    )
}

export default Header
