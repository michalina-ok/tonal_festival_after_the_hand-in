import React from "react";
import { Link } from "react-router-dom";
import { useState, useRef, useEffect } from "react";

function Area(props) {



  function add() {
    props.setOrder({
      ...props.order,
      area: props.area.area,
    });

  //    props.setReservation({
  //      ...props.reservation,
  //      area: props.area.area,
  //  })

   props.getReservationData({area: props.area.area,
   amount: props.ticketNumbers})

  }

  return (
    <div className="areas-container">
      {props.area.available >= props.ticketNumbers && (
      <div className="available-area">
     
        
          <div>
          <h3>{props.area.area}</h3>
          <p>
            {" "}
            {props.area.available} spot available out of {props.area.spots}
          </p>
          </div>
          <button className="round" onClick={add}>
            Choose this area
          </button>
     
        </div>
      )}
      {props.area.available < props.ticketNumbers && (
         <div className="unavailable-area">
     
         
          <h3>{props.area.area}</h3>
          <p>Sold out</p>
        </div>
 
      )}
    </div>
  );
}

export default Area;
