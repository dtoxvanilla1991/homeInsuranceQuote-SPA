import happyPic from '../images/family.jpg';
import Button from './Button';
import { Link } from 'react-router-dom';

const About = () => {
    return (
        <div className="about">
            <br/>
            <h2 style={{marginBottom: "1em"}}>Who we are</h2>
            <p>With over 300 years’ experience, we’ve learnt a thing or two about risk and 
            uncertainty and the value of insurance to our customers.</p>
            <p>With over 300 years’ experience, we’ve learnt a thing or two about risk and uncertainty and the value of insurance to our customers.</p>
            <p>As the world evolves so do the needs of those we serve, and we must respond with an agile yet resilient business that always strives to do better</p>
            <div>
                <figure style={{marginTop: "4em"}}>
                     <span className="about-img">
                          <img src={happyPic} alt="module05jpg" />
                     </span>
                </figure>
                <div>
                    <h4 className="promo-head" style={{marginBottom: "1em"}}>Vision and purpose</h4>
                    <Link to="/" className='link'><Button buttonTitle="READ MORE" className="promo" title="Open link in this window" target="">Read more</Button></Link>
                </div>
            </div>
        </div>
    )
}

export default About;
