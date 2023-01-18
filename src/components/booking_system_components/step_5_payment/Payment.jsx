import { useRef } from "react";

import { insertOrder } from "../../../modules/db";
import { sendID } from "../../../modules/send-id";


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
      
      <form onSubmit={submit} ref={personalDetailsForm}>
        <div className="personal-information">
        <h2>Personal information</h2>
        <div className="form-control">
          <label htmlFor="form-name">Name</label>
          <input required type="text" name="name" id="form-name" pattern="[A-Z'][a-zA-Z'-]{0,}\s[A-Z-a-z-'][a-zA-Z-']{0,}" title="Please include both your names and last name"></input>
        </div>
        <div className="form-control">
          <label htmlFor="form-email">E-mail</label>
          <input required type="email" name="email" id="form-email"></input>
        </div>
        <div className="form-control">
          <label htmlFor="form-phone-number">Phone number</label>
          <input required type="text" name="phone" id="form-phone-number" pattern="[+][0-9]{5,17}" title="Please include your country code starting with +. The phone number must be between 5 and 17 digits."></input>
        </div>
        <div className="form-control">
          <label htmlFor="form-address">Address</label>
          <textarea name="address" id="form-address" pattern="[a-zA-Z-'0-9. /]{1,}" title="Please include your full address (street, house and apartment number, zip code and city"></textarea>
        </div>
        </div>
        <div className="card-information">
        <h2>Card information</h2>
        <div className="form-control">
          <label htmlFor="form-cardholder-name">Cardholder name</label>
          <input required type="text" name="cardholder-name" id="form-cardholder-name" pattern="[A-Z'][a-zA-Z'-]{0,}\s[A-Z-a-z-'][a-zA-Z-']{0,}" title="Please include your name as stated on your card"></input>
        </div>
        <div className="form-control">
          <label htmlFor="form-card-number">Card number</label>
          <input required type="text" name="card-number" id="form-card-number" placeholder="Card number" pattern="[0-9]{4}\s*"></input>
        </div>
        <div className="card-details">
        <div className="form-control">
          <label htmlFor="form-phone-number">Expiry date</label>
          <input required type="text" name="expiry-date" id="form-expiry-date" placeholder="MM/YY" pattern="[0-1]{1}[1-9]{1}[/][2]{1}[3-9]{1}" title="Please include both month and year in the following format: MM/YY"></input>
        </div>
        <div className="form-control">
          <label htmlFor="form-phone-number">CVV</label>
          <input required type="text" name="cvv" id="form-cvv" placeholder="CVV" pattern="[0-9]{3}" title="Please include CVV number consisting of 3 digits. You will find it on the back of your card."></input>
        </div>
        </div>
        <button className="round">Pay</button>
        </div>
      </form>
    </div>
  );
}

export default Payment;
