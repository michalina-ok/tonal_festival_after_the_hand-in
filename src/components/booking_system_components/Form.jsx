import { useState, useRef, useEffect } from "react";

import TicketsDetails from "./TicketsDetails";
import AreaDetails from "./AreaDetails";
import Success from "./Success";
import VisitorsDetails from "./step_2_visitors/VisitorsDetails";
import Payment from "./step_5_payment/Payment";
import Review from "./step_4_review/Review";

import ticketsData from "../../products_data/ticketsData";
import tentsData from "../../products_data/tentsData";

import Countdown from "react-countdown";
import { insertOrder } from "../../modules/db";

function Form(props) {
  // USE STATES
  const [cart, setCart] = useState([{ id: "6", name: "Booking fee", type: "extra", amount: 1, price: 99 }]);
  const [areas, setAreas] = useState([]);
  const [ticketNumbers, setTicketNumbers] = useState(0);
  const [placesInTents, setPlacesInTents] = useState(0);
  const [reservationID, setReservationID] = useState("");
  const [order, setOrder] = useState({
    area: "",
    visitors: [],
  });
  const [page, setPage] = useState(1);
  const [expiry, setExpiry] = useState(null);
  const countdown = useRef();
  const { tents } = tentsData;
  const { tickets } = ticketsData;

  //TIMER

  function onReserve() {
    setExpiry(Date.now() + 300000);
  }

  function onReserveExpired() {
    setExpiry(null);
    setPage(1);
    alert("The reservation for your order has fallen through. Please start again.");
  }

  //CART

  function addToCart(data) {
    if (data.product === "ticket") {
      setTicketNumbers((oldTicketNumbers) => oldTicketNumbers + 1);
    }
    if (data.product === "tent" && data.for) {
      setPlacesInTents((old) => old + data.for);
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

  function removeFromCart(data) {
    if (data.product === "ticket") {
      setTicketNumbers((oldTicketNumbers) => oldTicketNumbers - 1);
    }
    if (data.product === "tent" && data.for) {
      setPlacesInTents((old) => old - data.for);
    }
    setCart((oldCart) => {
      const subtracted = oldCart.map((item) => {
        if (item.id === data.id) {
          return { ...item, amount: item.amount - 1 };
        }
        return item;
      });
      const filtered = subtracted.filter((item) => item.amount > 0);
      return filtered;
    });
  }

  //NAVIGATION

  function prevPage() {
    setPage((oldPage) => oldPage - 1);
  }
  function nextPage() {
    setPage((oldPage) => oldPage + 1);
  }


  return (
    <div className="Form">
      <h1>Tonal Festival</h1>
      {page === 1 && <TicketsDetails placesInTents={placesInTents} removeFromCart={removeFromCart} nextPage={nextPage} setOrder={setOrder} order={order} addToCart={addToCart} tents={tents} tickets={tickets} setTicketNumbers={setTicketNumbers} ticketNumbers={ticketNumbers} cart={cart}/>}
      {page === 2 && <VisitorsDetails prevPage={prevPage} nextPage={nextPage} setOrder={setOrder} order={order} ticketNumbers={ticketNumbers} cart={cart} />}
      {page === 3 && <AreaDetails setAreas={setAreas} prevPage={prevPage} nextPage={nextPage} setPage={setPage} areas={areas} order={order} setOrder={setOrder} addToCart={addToCart} ticketNumbers={ticketNumbers} reservationID={reservationID} setReservationID={setReservationID} onReserve={onReserve} />}
      {page === 4 && <Review prevPage={prevPage} nextPage={nextPage} cart={cart} order={order} />}
      {page === 5 && <Payment reservationID={reservationID} prevPage={prevPage} nextPage={nextPage} cart={cart} order={order} setExpiry={setExpiry} />}
      {page === 6 && <Success />}
      <div className="timer">
      {expiry != null && <p>Time left to complete the reservation</p>}
      {expiry != null && <Countdown date={expiry} 
      ref={countdown} onComplete={onReserveExpired} />}
      </div>
    </div>
  );
}

export default Form;
