import React from "react";
import { Link } from "react-router-dom";
import Area from "./Area";
import { useState, useRef, useEffect } from "react";
import Alert from "./Alert";


function AreaDetails(props) {
  const [reservation, setReservation] = useState({})
  const [isAlert, setIsAlert] = useState(false)


  function handleClick() {

    //insertReservation(reservation);
    props.order.area.length ?  props.nextPage()  : handleAlert();
  }

  function handleAlert() {
    setIsAlert(true);
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
  
    setReservation(payload);

    props.onReserve();
  }



  

let i=1;

 
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
            tabIndex={i++}
           
          
        
          />
        ))}
      </div>
      <button className="round" onClick={props.prevPage}>Go back</button>
      {isAlert && <Alert message={"Please choose an area"}/> }
      <button className="round" onClick={handleClick} >Continue</button>
    </div>
  );
}

export default AreaDetails;
