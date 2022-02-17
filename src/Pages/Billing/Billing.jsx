import classes from "./Billing.module.css";

const Billing = () => {
  return (
    <>
      <h1>Copy Address Button</h1>

      <div class="wrap">
        <div class="shipping">
          <h2>Shipping Address</h2>
          <p class="checkBoxText">We will ship documents here</p>
          <input placeholder="Name" class="nameShip" value="Will Robinson" />
          <input
            placeholder="Address 1"
            class="address1Ship"
            value="Tower Bridge Way"
          />
          <input placeholder="Address 2" class="address2Ship" value="12" />
          <input placeholder="City" class="cityShip" value="London" />
          <select placeholder="County" class="stateShip">
            <option value="Essex">Essex</option>
            <option value="Cambridge">Cambridge</option>
          </select>
          <input placeholder="Zip" class="zipShip" value="E65RR" />
          <input placeholder="Phone" class="phoneShip" value="(810) 758-9856" />
          <input placeholder="Email" class="emailShip" value="lost@space.com" />
        </div>

        <div class="billing">
          <h2>Billing Address</h2>
          <input type="checkbox" class="checkBox" />
          <p class="checkBoxText">Billing is the same as shipping</p>
          <input placeholder="Name" class="nameBill" />
          <input placeholder="Address 1" class="address1Bill" />
          <input placeholder="Address 2" class="address2Bill" />
          <input placeholder="City" class="cityBill" />
          <select placeholder="State" class="stateBill">
            <option value="0">Select a county</option>
            <option value="Essex">Essex</option>
            <option value="Cambridge">Cambridge</option>
          </select>
          <input placeholder="Zip" class="zipBill" />
          <input placeholder="Phone" class="phoneBill" />
          <input placeholder="Email" class="emailBill" />
        </div>
      </div>
    </>
  );
};

export default Billing;
