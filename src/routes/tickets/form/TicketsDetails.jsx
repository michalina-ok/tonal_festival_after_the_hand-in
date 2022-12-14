import React, { useState } from "react";
import Ticket from "./Ticket"
import Basket from "./Basket";
import { useRef } from "react";
import Tent from "./Tent";

function TicketsDetails(props) {
  return (
    <div className="TicketsDetails">
      <h2>Tickets</h2>
      { 
      props.tickets.map((product) => (
        <Ticket key={product.id} cart={props.cart} product={product} addToCart={props.addToCart} addToOrder={props.addToOrder} order={props.order} setOrder={props.setOrder} />
      ))}

      <h2>Camping</h2>
      {props.tents.map((product) => (
        <Tent key={product.id} product={product} addToCart={props.addToCart} addToOrder={props.addToOrder} cart={props.cart} order={props.order} setOrder={props.setOrder} />
      ))}
      <label htmlFor="form-green-camping">Green camping</label>
        <input type="checkbox" id="form-green-camping" name="green-camping"></input>

   <Basket  cart={props.cart} setOrder={props.setOrder} order={props.order} />
      <button className="round" onClick={props.nextPage}>Continue</button>
    </div>
  );
}

export default TicketsDetails;
