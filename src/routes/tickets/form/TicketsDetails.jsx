import React, { useState } from "react";
import Ticket from "./Ticket";
import Basket from "./Basket";
import Tent from "./Tent";

function TicketsDetails(props) {
  const [isChecked, setIsChecked] = useState(false);


  const handleChange = () => {
    const greenCamping = { id: "5", name: "Green camping", type: "extra", amount: 1, price: 249 };
    isChecked ? props.removeFromCart(greenCamping) : props.addToCart(greenCamping);
    setIsChecked(!isChecked);
  };


  return (
    <div className="TicketsDetails">
      <h2>Tickets</h2>
      {props.tickets.map((product) => (
        <Ticket key={product.id} removeFromCart={props.removeFromCart} cart={props.cart} product={product} addToCart={props.addToCart} addToOrder={props.addToOrder} order={props.order} setOrder={props.setOrder} />
      ))}

      <h2>Camping</h2>
      {props.tents.map((product) => (
        <Tent key={product.id} removeFromCart={props.removeFromCart} product={product} addToCart={props.addToCart} addToOrder={props.addToOrder} cart={props.cart} order={props.order} setOrder={props.setOrder} />
      ))}
      <label htmlFor="form-green-camping">Green camping</label>
      <input type="checkbox" id="form-green-camping" name="green-camping" onChange={handleChange}></input>

      <Basket cart={props.cart} setOrder={props.setOrder} order={props.order} />
      <button className="round" onClick={props.nextPage}>
        Continue
      </button>
    </div>
  );
}

export default TicketsDetails;
