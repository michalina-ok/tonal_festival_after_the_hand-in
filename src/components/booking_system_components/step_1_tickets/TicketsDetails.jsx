import { useState } from "react";

import Ticket from "./Ticket";
import Basket from "./Basket";
import Tent from "./Tent";
import Alert from "../Alert";

function TicketsDetails(props) {
  const [isChecked, setIsChecked] = useState(false);
  const [alertMessage, setAlertMessage] = useState("");
  const [isAlert, setIsAlert] = useState(false);

  //CHECKBOX
  const handleChange = () => {
    const greenCamping = { id: "5", name: "Green camping", type: "extra", amount: 1, price: 249 };
    isChecked ? props.removeFromCart(greenCamping) : props.addToCart(greenCamping);
    setIsChecked(!isChecked);
  };

  const handleClick = () => {
    if (props.ticketNumbers === 0) {
      setIsAlert(true);
      setAlertMessage("Please add tickets");
    } else if (props.placesInTents === 0 && props.ticketNumbers > 0) {
      props.nextPage();
    } else if (props.ticketNumbers != props.placesInTents) {
      setIsAlert(true);
      setAlertMessage("Your number of tent spaces does not match the number of guests");
    } else {
      props.nextPage();
    }
  };

  return (
    <div className="TicketsDetails">
      <div role="form" aria-label="Tickets and tents information">
        <h2>Tickets</h2>
        <h3>Both tickets are 7-day passes</h3>
        {props.tickets.map((product) => (
          <Ticket key={product.id} removeFromCart={props.removeFromCart} cart={props.cart} product={product} addToCart={props.addToCart} addToOrder={props.addToOrder} order={props.order} setOrder={props.setOrder} />
        ))}
        <h2>Tents</h2>
        <h3>You can bring your own tent for free or rent one from us and have it set up for you</h3>
        {props.tents.map((product) => (
          <Tent key={product.id} removeFromCart={props.removeFromCart} product={product} addToCart={props.addToCart} addToOrder={props.addToOrder} cart={props.cart} order={props.order} setOrder={props.setOrder} />
        ))}
        <label htmlFor="form-green-camping">Green camping</label>
        <input type="checkbox" id="form-green-camping" name="green-camping" onChange={handleChange}></input>
      </div>

      <Basket cart={props.cart} setOrder={props.setOrder} order={props.order} />
      {isAlert && <Alert message={alertMessage} />}
      <button className="round" onClick={handleClick}>
        Continue
      </button>
    </div>
  );
}

export default TicketsDetails;
