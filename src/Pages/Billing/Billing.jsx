import { useEffect } from "react";
import classes from "./Billing.module.css";

const Billing = () => {

  return (

    <>

      <div className="wrap">
        <div className="shipping">
          <h2 className="billingH2">Shipping Address</h2>
          <p className="checkBoxText">We will ship documents here</p>
          <input placeholder="Name" className="nameShip" value="Will Robinson" />
          <input
            placeholder="Address 1"
            className="address1Ship"
            value="Tower Bridge Way"
          />
          <input placeholder="Address 2" className="address2Ship" value="12" />
          <input placeholder="City" className="cityShip" value="London" />
          <select placeholder="County" className="stateShip">
            <option value="Essex">Essex</option>
            <option value="Cambridge">Cambridge</option>
          </select>
          <input placeholder="Zip" className="zipShip" value="E65RR" />
          <input placeholder="Phone" className="phoneShip" value="(810) 758-9856" />
          <input placeholder="Email" className="emailShip" value="lost@space.com" />
        </div>

        <div className="billing">
          <h2 className="billingH2">Billing Address</h2>
          <input type="checkbox" className="checkBox" />
          <p className="checkBoxText">Billing is the same as shipping</p>
          <input placeholder="Name" className="nameBill" />
          <input placeholder="Address 1" className="address1Bill" />
          <input placeholder="Address 2" className="address2Bill" />
          <input placeholder="City" className="cityBill" />
          <select placeholder="State" className="stateBill">
            <option value="0">Select a county</option>
            <option value="Essex">Essex</option>
            <option value="Cambridge">Cambridge</option>
          </select>
          <input placeholder="Zip" className="zipBill" />
          <input placeholder="Phone" className="phoneBill" />
          <input placeholder="Email" className="emailBill" />
        </div>
      </div>
    </>
  );
};

export default Billing;
