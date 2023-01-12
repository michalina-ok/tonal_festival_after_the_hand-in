import { useRef } from "react";

import { insertOrder } from "../../modules/db";
import { sendID } from "../../modules/send-id";

function Payment(props) {
  const personalDetailsForm = useRef(null);

  async function submit(e) {
    e.preventDefault();
    const payload = { ...props.order,
      basket: props.cart, 
      name: personalDetailsForm.current.elements.name.value,
     email: personalDetailsForm.current.elements.email.value,
     address: personalDetailsForm.current.elements.address.value,
     phone: personalDetailsForm.current.elements.phone.value,
    };
   
    await insertOrder(payload);
    await sendID({"id": props.reservationID});
    props.nextPage((oldPage) => oldPage + 1);
    props.setExpiry(null);
  }
  return (
    <div className="Payment">
      <h2>Payment details</h2>
      <form onSubmit={submit} ref={personalDetailsForm}>
        <div className="form-control">
          <label htmlFor="form-name">Full name</label>
          <input required type="text" name="name" id="form-name"></input>
        </div>

        <div className="form-control">
          <label htmlFor="form-email">E-mail</label>
          <input required type="email" name="email" id="form-email"></input>

        </div>
        <div className="form-control">
          <label htmlFor="form-phone-number">Phone number</label>
          <input required type="type" name="phone" id="form-phone-number"></input>
        </div>
        <div className="form-control">
          <label htmlFor="form-address">Address</label>
          <textarea name="address" id="form-address"></textarea>
        </div>
        <div className="form-control">
          <label htmlFor="form-card-number">Card number</label>
          <input  required type="type" name="card-number" id="form-card-number" placeholder="1234 1234 1234 1234"></input>
        </div>
        <div className="form-control">
          <label htmlFor="form-phone-number">Expiry date</label>
          <input required type="type" name="expiry-date" id="form-expiry-date" placeholder="02/25"></input>
        </div>
        <div className="form-control">
          <label htmlFor="form-phone-number">CVV</label>
          <input required type="type" name="cvv" id="form-cvv" placeholder="345"></input>
        </div>
    

        <button className="round">Pay</button>
      </form>
    </div>
  );
}

export default Payment;
