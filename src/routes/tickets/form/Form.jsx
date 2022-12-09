import React from "react";
import { Link } from "react-router-dom";
import { useState, useRef, useEffect } from "react";
import { insertOrder } from "../../../modules/db";
import Product from "./Product";
import Basket from "./Basket";
import TicketsDetails from "./TicketsDetails";
import ArenaDetails from "./ArenaDetails";
import Checkout from "./Checkout";
import Success from "./Success";
import VisitorsDetails from "./VisitorsDetails";

function Form(props) {
  const [cart, setCart] = useState([]);

  function addToCart(data) {
    if (cart.find((entry) => entry.type === data.type)) {
      setCart((oldCart) =>
        oldCart.map((entry) => {
          if (entry.type !== data.type) {
            return entry;
          }
          const copy = { ...entry };
          copy.amount = copy.amount + 1;
          return copy;
        })
      );
    } else {
      setCart((oldCart) => oldCart.concat({ ...data, amount: 1 }));
    }
  }

  return (
    <div>
      <Basket cart={cart} />
      <TicketsDetails addToCart={addToCart} />
      <ArenaDetails />
      <VisitorsDetails />
      <Checkout />
      <Success />
    </div>
  );
}

export default Form;
