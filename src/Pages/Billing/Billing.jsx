import classes from "./Billing.module.css";

const Billing = () => {
  return (
    <>
      <form className={classes.form}>
        <label htmlFor="Full name">Full Name</label>
        <input type="text" value="full name" readOnly="readonly"></input>
        <label htmlFor="Address line 1">Address line 1</label>
        <input type="text" value="Address line 1" readOnly="readonly"></input>
        <label htmlFor="Address line 2">Address line 2</label>
        <input type="text" value="Address line 2" readOnly="readonly"></input>
        <label htmlFor="City">City</label>
        <input type="text" value="City" readOnly="readonly"></input>
        <label htmlFor="Post code">Post code</label>
        <input type="text" value="Post code" readOnly="readonly"></input>
        <label htmlFor="Country of residence">Country of residence</label>
        <input type="text" value="Country" readOnly="readonly"></input>
        <button>EDIT</button>
      </form>
    </>
  );
};

export default Billing;
