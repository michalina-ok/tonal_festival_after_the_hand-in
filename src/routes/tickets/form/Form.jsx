import React from "react";
import { Link, Outlet, Routes, Route } from "react-router-dom";
import { useState, useRef, useEffect } from "react";
import { insertOrder } from "../../../modules/db";
import TicketsDetails from "./TicketsDetails";
import AreaDetails from "./AreaDetails";
import Success from "./Success";
import VisitorsDetails from "./VisitorsDetails";
import ticketsData from "../../../ticketsData";
import tentsData from "../../../tentsData";
import Payment from "./Payment";
import Review from "./Review";
import Timer from "./Timer";
import Countdown from "react-countdown";

function Form(props) {
  // USE STATES
  const [cart, setCart] = useState([{ id: "6", name: "Booking fee", type: "extra", amount: 1, price: 99 }]);
  const [areas, setAreas] = useState([]);
  const [ticketNumbers, setTicketNumbers] = useState(0);
  const [reservationID, setReservationID] = useState("");
  const [order, setOrder] = useState({
    area: "",
    visitors: [],
  });
  const [page, setPage] = useState(1);
  //const [timer, setTimer] = useState("00:00");
  const Ref = useRef(null);
  const [placesInTents, setPlacesInTents] = useState(0);


  const { tents } = tentsData;
  const { tickets } = ticketsData;
const [expiry, setExpiry] = useState(null);
const countdown = useRef()

function onReserve(){
  setExpiry(Date.now() + 300000)
}

function onReserveExpired() {
  setExpiry(null);
  alert("time passed")
}


  //FETCHING

  useEffect(() => {
    async function getData() {
      const url = "http://localhost:8080";
      const res = await fetch(url + "/available-spots/");
      const data = await res.json();
      setAreas(data);
    }
    getData();
  }, [areas.available]);

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

  function prevPage() {
    setPage((oldPage) => oldPage - 1);
  }
  function nextPage(e) {
    setPage((oldPage) => oldPage + 1);
  }

  // console.log(order);
  // console.log(reservationID);

  return (
    <div className="Form">
      <h1>Tonal Festival</h1>
      {expiry != null && <Countdown date={expiry} ref={countdown} onComplete={onReserveExpired} />}
      {page === 1 ? (
        <TicketsDetails
          placesInTents={placesInTents}
          removeFromCart={removeFromCart}
          nextPage={nextPage}
          setOrder={setOrder}
          order={order}
          addToCart={addToCart}
          tents={tents}
          tickets={tickets}
          setTicketNumbers={setTicketNumbers}
          ticketNumbers={ticketNumbers}
          cart={cart}
        />
      ) : (
        ""
      )}
      {page === 2 ? <VisitorsDetails prevPage={prevPage} nextPage={nextPage} setOrder={setOrder} order={order} ticketNumbers={ticketNumbers} cart={cart} /> : ""}
      {page === 3 ? (
        <AreaDetails
          prevPage={prevPage}
          nextPage={nextPage}
          setPage={setPage}
          areas={areas}
          order={order}
          setOrder={setOrder}
          addToCart={addToCart}
          ticketNumbers={ticketNumbers}
          reservationID={reservationID}
          setReservationID={setReservationID}
          onReserve={onReserve}

        />
      ) : (
        ""
      )}
      {page === 4 ? <Review prevPage={prevPage} nextPage={nextPage} cart={cart} order={order} /> : ""}
      {page === 5 ? <Payment reservationID={reservationID} prevPage={prevPage} nextPage={nextPage} cart={cart} order={order} setExpiry={setExpiry} /> : ""}
      {page === 6 && <Success />}
    </div>
  );
}

export default Form;
