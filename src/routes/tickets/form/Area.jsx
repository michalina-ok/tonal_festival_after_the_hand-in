import React from "react";

function Area(props) {
  function handleClick() {
    props.setOrder({
      ...props.order,
      area: props.area.area,
    });

    props.getReservationData({ area: props.area.area, amount: props.ticketNumbers });
  }

  return (
    <div>
      <div className="main-stage"></div>
      <div className="areas-container">
        {props.area.available >= props.ticketNumbers && (
          <div className="available-area">
            <div>
              <h3>{props.area.area}</h3>
            </div>
            <button className={props.area.area === props.order.area ? "active" : "round"} onClick={handleClick}>
              {props.area.area === props.order.area ? "✓" : "Choose"}
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
    </div>
  );
}

export default Area;
