import React from "react";
import { Link } from "react-router-dom";

function Area(props) {
  function insertReservation(payload) {
    fetch("http://localhost:8080/reserve-spot/", {
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
  function submit() {
    insertReservation({
      "area": props.area.area,
      "amount": props.ticketNumbers
    });
    console.log("put request went through");
  }


  function add() {
    props.setOrder({
      ...props.order,
      area: props.area.area,
    });
  }

  return (
    <div>
      {props.area.available >= props.ticketNumbers && (
        <div className="available">
          <h3>{props.area.area}</h3>
          <p>
            {" "}
            {props.area.available} spot available out of {props.area.spots}
          </p>
          <button onClick={add}>Choose this area</button>
          <button onClick={submit}>ID</button>
         
        </div>
      )}
      {props.area.available < props.ticketNumbers && (
        <div className="unavailable">
          <h2>{props.area.area}</h2>
          <p>Sold out</p>
        </div>
      )}
    </div>
  );
}

export default Area;
