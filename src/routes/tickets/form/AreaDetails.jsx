import React from "react";
import { Link } from "react-router-dom";
import Area from "./Area";
import { insertReservation } from "../../../modules/reservation";

function AreaDetails(props) {
 
  return (
    <>
      <h2>Where would you like to stay?</h2>
      <p>We’ve prepared 4 unique areas for you to stay in. Click on a selected arena to find out more information.</p>
      <div>
        {props.areas.map((area) => (
          <Area key={area.area} order={props.order} setOrder={props.setOrder} area={area} addToCart={props.addToCart} addToOrder={props.addToOrder} ticketNumbers={props.ticketNumbers} />
        ))}
      </div>
      <button>Continue</button>
    </>
  );
}

export default AreaDetails;
