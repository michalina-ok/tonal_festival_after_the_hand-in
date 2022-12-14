import React from "react";
import { Link } from "react-router-dom";
import Area from "./Area";

function AreaDetails(props) {
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
          />
        ))}
      </div>
      <button className="round" onClick={props.prevPage}>Go back</button>
      <button className="round" onClick={props.nextPage}>Continue</button>
    </div>
  );
}

export default AreaDetails;
