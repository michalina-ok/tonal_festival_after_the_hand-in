import React, { useState } from "react";
import Product from "./Ticket";
import Basket from "./Basket";
import { useRef } from "react";
import { Link } from "react-router-dom";
import Tent from "./Tent";

function TicketsDetails(props) {
  return (
    <div className="TicketsDetails">
      <h2>Buy your ticket</h2>
      {props.tickets.map((product) => (
        <Product key={product.id} product={product} addToCart={props.addToCart} addToOrder={props.addToOrder} order={props.order} setOrder={props.setOrder} />
      ))}

      <h2>Accommodation</h2>
      {props.tents.map((product) => (
        <Tent key={product.id} product={product} addToCart={props.addToCart} addToOrder={props.addToOrder} order={props.order} setOrder={props.setOrder} />
      ))}
   <Basket  cart={props.cart} setOrder={props.setOrder} order={props.order} />
      <button onClick={() => props.setPage(oldPage => oldPage + 1)}>Continue</button>
    </div>
  );
}

export default TicketsDetails;
