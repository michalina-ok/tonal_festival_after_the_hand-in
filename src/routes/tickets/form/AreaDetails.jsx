import React from "react";
import { Link } from "react-router-dom";
import Area from "./Area";

function AreaDetails(props) {
  return (
    <>
      <h2>Choose your arena here</h2>
      <div>
        {props.areas.map((area) => (
          <Area key={area.area} area={area} addToCart={props.addToCart} addToOrder={props.addToOrder} />
        ))}
      </div>
      <button>Save</button>
    </>
  );
}

export default AreaDetails;
