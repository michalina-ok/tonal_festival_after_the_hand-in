import React from "react";
import { Link } from "react-router-dom";
import { useState, useRef, useEffect } from "react";
import { insertOrder } from "../../../modules/db";
import Product from "./Product";
import Basket from "./Basket";
import TicketsDetails from "./TicketsDetails";
import AreaDetails from "./AreaDetails";
import Checkout from "./Checkout";
import Success from "./Success";
import VisitorsDetails from "./VisitorsDetails";
import data from '../../../data'

function Form(props) {
  const [cart, setCart] = useState([]);
  const [order, setOrder] = useState([]);
  const [areas, setAreas] = useState([]);
  const [ticketNumbers, setTicketNumbers] = useState(0)


  const {products } = data;

  useEffect(() => {
    async function getData() {
      const res = await fetch("http://localhost:8080/available-spots/");
      const data = await res.json();
      setAreas(data);
    }
    getData();
  }, []);

  function addToCart(data) {
    if (data.prod === "ticket") {
      setTicketNumbers((oldTicketNumbers) => oldTicketNumbers + 1)
    }
    if (cart.find((entry) => entry.type === data.type))  {
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

  const handleQuantityDecrease = (index) => {
    const newItems = [...items];
  
    newItems[index].quantity--;
  
    setItems(newItems);
  };


  function addToOrder(data) {
      setOrder((oldOrder) => oldOrder.concat({...data}));
 
    //order.push(data);
    console.log('object:', data)
    console.log('curent order:', order)
    
   
  }

  

  return (
    <div>
    
      <TicketsDetails addToOrder={addToOrder} addToCart={addToCart} products={products} setTicketNumbers={setTicketNumbers} />
      <Basket cart={cart} />
      <AreaDetails areas={areas} addToOrder={addToOrder} addToCart={addToCart}/>
      <VisitorsDetails addToOrder={addToOrder} ticketNumbers={ticketNumbers} />
      <Checkout />
      <Success />
    </div>
  );
}

export default Form;
