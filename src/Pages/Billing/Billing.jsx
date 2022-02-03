import classes from "./Billing.module.css";

const Billing = () => {
  return (
    <>
      <form className={classes.form}>
        <label htmlFor="Full name">Full Name</label>
        <input type="text" value="full name" name="fullName" readOnly="readonly"></input><br/>
        <label htmlFor="Address line 1">Address line 1</label>
        <input type="text" value="Address line 1" name="address1" readOnly="readonly"></input><br/>
        <label htmlFor="Address line 2">Address line 2</label>
        <input type="text" value="Address line 2" name="address2" readOnly="readonly"></input><br/>
        <label htmlFor="City">City</label>
        <input type="text" value="City" name="city" readOnly="readonly"></input><br/>
        <label htmlFor="Post code">Post code</label>
        <input type="text" value="Post code" name="postCode" readOnly="readonly"></input><br/>
        <label htmlFor="Country of residence">Country of residence</label>
        <input type="text" value="Country" name="country" readOnly="readonly"></input>
        <button>EDIT</button>
      </form>
    </>
  );
};

export default Billing;
