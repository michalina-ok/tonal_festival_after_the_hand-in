import React from "react";
import { Link } from "react-router-dom";
import { useState, useRef, useEffect } from "react";
import { insertOrder } from "../../../modules/db";
import Product from "./Ticket";
import Basket from "./Basket";
import TicketsDetails from "./TicketsDetails";
import AreaDetails from "./AreaDetails";
import Success from "./Success";
import VisitorsDetails from "./VisitorsDetails";
import ticketsData from '../../../ticketsData'
import tentsData from '../../../tentsData'
import Payment from "./Payment";
import Review from "./Review";

function Form(props) {
  // USE STATES
  const [cart, setCart] = useState([]);
  const [areas, setAreas] = useState([]);
  const [ticketNumbers, setTicketNumbers] = useState(0);
  const [reservationID, setReservationID] = useState('')
  const [order, setOrder] = useState({
    area: "",
    visitors: [],
    name: '',
    address: '',
    email: '',
    phone: '',
    basket: cart,
  });

  const { tents } = tentsData;
  const { tickets } = ticketsData;
  


  //FETCHING

  useEffect(() => {
    async function getData() {
      const res = await fetch("http://localhost:8080/available-spots/");
      const data = await res.json();
      setAreas(data);
    }
    getData();
  }, []);

  function addToCart(data) {
    if (data.product=== "ticket" ) {
      setTicketNumbers((oldTicketNumbers) => oldTicketNumbers + 1);
    }
    if (cart.find((entry) => entry.id === data.id)) {
      setCart((oldCart) =>
        oldCart.map((entry) => {
          if (entry.id !== data.id) {
            return entry;
          }
          const copy = { ...entry };
          copy.amount = copy.amount + 1;
          return copy;
        })
      );
    } else {
      setCart((oldCart) => oldCart.concat({ ...data }));
    }
  }

  // const handleQuantityDecrease = (index) => {
  //   const newItems = [...items];

  //   newItems[index].quantity--;

  //   setItems(newItems);
  // };

  console.log(order);
  console.log(reservationID);

  return (
    <div>
      <TicketsDetails setOrder={setOrder} order={order} addToCart={addToCart} tents={tents} tickets={tickets} setTicketNumbers={setTicketNumbers} />
      <Basket cart={cart} setOrder={setOrder} order={order} />
      <VisitorsDetails setOrder={setOrder} order={order} ticketNumbers={ticketNumbers} cart={cart} />
      <AreaDetails areas={areas} order={order} setOrder={setOrder} addToCart={addToCart} ticketNumbers={ticketNumbers} reservationID={reservationID} setReservationID={setReservationID} />
      <Review cart={cart} order={order} />
      <Payment cart={cart} order={order}/>
      <Success />
    </div>
  );
}

export default Form;
