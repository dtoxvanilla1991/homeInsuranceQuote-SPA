import{ Link } from 'react-router-dom';
import styles from './Footer.module.css';

const Footer = () => {
    return (
        <footer className={styles.footer}>
            Copyright &copy; 2022
            <br/>
            <Link className="link" to="/about">About</Link>
        </footer>
    )
}

export default Footer;
