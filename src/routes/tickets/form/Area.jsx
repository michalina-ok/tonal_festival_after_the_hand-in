import React from "react";

function Area(props) {
  function add() {
    props.setOrder({
      ...props.order,
      chosenArea: props.area.area,
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
