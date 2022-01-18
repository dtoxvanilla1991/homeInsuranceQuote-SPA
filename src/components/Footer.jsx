import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer>
            Copyright &copy; 2022
            <br/>
            <Link className="link" to="/about">About</Link>
        </footer>
    )
}

export default Footer;
