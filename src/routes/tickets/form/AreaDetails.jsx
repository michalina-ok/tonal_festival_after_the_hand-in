import React from "react";
import { Link } from "react-router-dom";
import Area from "./Area";
import { useState, useRef, useEffect } from "react";
import Alert from "./Alert";

function AreaDetails(props) {
  const [reservation, setReservation] = useState({});
  const [isAlert, setIsAlert] = useState(false);

  //FETCHING

  useEffect(() => {
    async function getData() {
      const url1 = "http://localhost:8080";
      const url2 = "https://tonal-fest.fly.dev";
      const res = await fetch(url2 + "/available-spots/");
      const data = await res.json();
      props.setAreas(data);
    }
    getData();
  }, [props.areas.available]);

  function insertReservation(payload) {
    const url1 = "http://localhost:8080";
    const url2 = "https://tonal-fest.fly.dev";
    fetch(url2 + "/reserve-spot/", {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    })
      .then((response) => response.json())
      .then((response) => props.setReservationID(response.id))
      .catch((err) => console.error(err));
  }

  function handleClick() {
    const reservation = { area: props.order.area, amount: props.ticketNumbers };
    insertReservation(reservation);
    props.order.area.length ? props.nextPage() : handleAlert();

    props.onReserve();
  }

  function handleAlert() {
    setIsAlert(true);
  }

  let i = 1;

  return (
    <div className="AreaDetails">
      <div role="form" aria-label="Camping area information">
        <h2>Where would you like to stay?</h2>
        <div className="areas">
          {props.areas.map((area) => (
            <Area
              key={area.area}
              order={props.order}
              setOrder={props.setOrder}
              area={area}
              addToCart={props.addToCart}
              addToOrder={props.addToOrder}
              ticketNumbers={props.ticketNumbers}
              reservationID={props.reservationID}
              setReservationID={props.setReservationID}
              insertReservation={insertReservation}
              setReservation={setReservation}
              tabIndex={i++}
            />
          ))}
        </div>
      </div>
      {isAlert && <Alert message={"Please choose an area"} />}
      <div className="buttons">
        <button className="round" onClick={props.prevPage}>
          Go back
        </button>

        <button className="round" onClick={handleClick}>
          Continue
        </button>
      </div>
    </div>
  );
}

export default AreaDetails;
