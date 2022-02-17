import heroMomLogo from "../../assets/single mom 2.jpg";
import mainTopPhoto from "../../assets/single mom.jpg";
import heroDadLogo from "../../assets/single dad.jpg";
import mainMidPhoto from "../../assets/single dad 2.jpg";
import mainBottomPhoto from "../../assets/purple-view.jpg";
import classes from "./Main.module.css";
import Button from "../../components/Button/Button";
import { Link } from "react-router-dom";

const Main = () => {

  const buttonTopFont = {
    padding: "0.6em", 
    borderRadius: "25px",
    fontSize: '1em',
  };

  const buttonMidFont = {
    backgroundColor: 'white'
  };

  return (
    <>
      <div className="container">
        <section className={classes["top-section"]}>
          <div className={classes.singleMom}>
            <img
              className={classes.mainPage}
              src={heroMomLogo}
              alt="REST home insurance"
            />
            <Link className={classes.link} to="/newquote">
            <Button buttonTitle="I AM SINGLE MOM" style={buttonTopFont} />
            </Link>
          </div>
          <div className={classes.singleDad}>
            <img
              className={classes.mainPage}
              src={heroDadLogo}
              alt="REST home insurance"
            />
            <Link to="/newquote" className={classes.link}>
            <Button buttonTitle="I AM SINGLE DAD" style={buttonTopFont} />
            </Link>
          </div>
        </section>
        <section className={classes.header}>
          <h1>You are never alone with us, in fact, you are our hero.</h1>
        </section>
        <section className={classes['mid-section']}>
          <div className={classes["top-section"]}>
            <div className={classes.col}>
            <h4>REST makes a difference</h4>
            <p>Exceptional insurance products. Pragmatic risk consultancy. Reliable claims service. Discover the difference REST can make for you, designed by experts you can depend on, we can make it happen.</p>
            <Button buttonTitle="Discover more" style={buttonMidFont} />
            </div>
            <div className={classes.col}>
            <img src={mainTopPhoto} alt="REST makes a difference" />
            </div>
          </div>
          <div className={classes["top-section"]}>
          <div className={classes.col}>
            <img src={mainMidPhoto} alt="HOME INSURANCE" />
            </div>
          <div className={classes.col}>
            <h4>HOME INSURANCE</h4>
            <p>Personal buildings and contents insurance, backed by a fast and reliable claims service. Discover two exceptional home insurance products, honed to people’s needs.</p>
            <Button buttonTitle="Search Home Insurance" style={buttonMidFont}/>
            </div>
          </div>
          <div className={classes["top-section"]}>
          <div className={classes.col}>
            <h4>HOW TO MAKE A CLAIM</h4>
            <p>Find the details you need for the policy you have – with clear next steps and contact details.</p>
            <Button buttonTitle="Make a claim" style={buttonMidFont} />
            </div>
            <div className={classes.col}>
            <img src={mainBottomPhoto} alt="HOW TO MAKE A CLAIM" />
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Main;
