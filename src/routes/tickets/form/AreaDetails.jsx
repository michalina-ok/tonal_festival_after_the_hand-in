import React from "react";
import { Link } from "react-router-dom";
import Area from "./Area";
import { useState, useRef, useEffect } from "react";

function AreaDetails(props) {
  const [reservation, setReservation] = useState({})


  function handleClick() {
    props.nextPage();

    insertReservation(reservation)
  }

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

  function getReservationData(payload) {
  
    setReservation(payload)
  }



 
  return (
    <div className="AreaDetails">
      <h2>Where would you like to stay?</h2>
      <p>We’ve prepared 4 unique areas for you to stay in. Click on a selected arena to find out more information.</p>
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
            getReservationData={getReservationData}
            setReservation={setReservation}
          
        
          />
        ))}
      </div>
      <button className="round" onClick={props.prevPage}>Go back</button>
      <button className="round" onClick={handleClick}>Continue</button>
    </div>
  );
}

export default AreaDetails;
