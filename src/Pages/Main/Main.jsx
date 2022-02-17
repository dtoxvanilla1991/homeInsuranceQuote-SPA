import heroMomLogo from "../../assets/single mom 2.jpg";
import mainTopPhoto from "../../assets/single mom.jpg";
import heroDadLogo from "../../assets/single dad.jpg";
import mainMidPhoto from "../../assets/single dad 2.jpg";
import mainBottomPhoto from "../../assets/purple-view.jpg";
import classes from "./Main.module.css";
import Button from "../../components/Button/Button";

const Main = () => {

  const buttonFont = {
    padding: "1em", borderRadius: "25px", fontSize: '1em' 
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
            <Button buttonTitle="I AM SINGLE MOM" style={buttonFont} />
          </div>
          <div className={classes.singleDad}>
            <img
              className={classes.mainPage}
              src={heroDadLogo}
              alt="REST home insurance"
            />
            <Button buttonTitle="I AM SINGLE DAD" style={buttonFont} />
          </div>
        </section>
        <section className={classes['mid-section']}>
          <div className={classes.mainSection}>
            <div className={classes.col}>
            <h4>REST makes a difference</h4>
            <p>We give businesses the safety to thrive, with exceptional insurance products and a reliable claims service, driven by experts at every stage.</p>
            </div>
            <div className={classes.col}>
            <img src={mainTopPhoto} alt="REST makes a difference" />
            </div>
          </div>
          <div className={classes.mainSection}>
          <div className={classes.col}>
            <img src={mainMidPhoto} alt="REST makes a difference" />
            </div>
          <div className={classes.col}>
            <h4>HOME INSURANCE</h4>
            <p>Personal buildings and contents insurance, backed by a fast and reliable claims service. Discover two exceptional home insurance products, honed to people’s needs.</p>
            </div>
          </div>
          <div className={classes.mainSection}>
          <div className={classes.col}>
            <h4>HOW TO MAKE A CLAIM</h4>
            <p>Find the details you need for the policy you have – with clear next steps and contact details.</p>
            </div>
            <div className={classes.col}>
            <img src={mainBottomPhoto} alt="REST makes a difference" />
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Main;
