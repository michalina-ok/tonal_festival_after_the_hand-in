import React from "react";
import { useRef } from "react";
import { insertOrder } from "../../../modules/db";

function Payment(props) {
  const payload = { ...props.order, basket: props.cart };

  function submit(e) {
    e.preventDefault();
    insertOrder(payload);

    props.setPage((oldPage) => oldPage + 1);
  }
  return (
    <div>
      <h2>Payment details</h2>
      <form onSubmit={submit}>
        <div className="form-control">
          <label htmlFor="form-name">Full name</label>
          <input required type="text" name="name" id="form-name"></input>
        </div>

        <div className="form-control">
          <label htmlFor="form-email">E-mail</label>

          <input type="email" name="email" id="form-email"></input>
          <p>We will send the tickets to this e-mail adress</p>
        </div>
        <div className="form-control">
          <label htmlFor="form-phone-number">Phone number</label>
          <input type="type" name="phone-number" id="form-phone-number"></input>
        </div>
        <div className="form-control">
          <label htmlFor="form-address">Address</label>
          <textarea name="address" id="form-address"></textarea>
        </div>
        <div className="form-control">
          <label htmlFor="form-card-number">Card number</label>
          <input type="type" name="card-number" id="form-card-number"></input>
        </div>
        <div className="form-control">
          <label htmlFor="form-phone-number">Expiry date</label>
          <input type="type" name="expiry-date" id="form-expiry-date"></input>
        </div>
        <div className="form-control">
          <label htmlFor="form-phone-number">CVV</label>
          <input type="type" name="cvv" id="form-cvv"></input>
        </div>

        <button>Pay</button>
      </form>
    </div>
  );
}

export default Payment;
