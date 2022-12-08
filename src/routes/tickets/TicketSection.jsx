import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";


function TicketSection(props) {
  let obj = props.areas[0];

  const [availableTickets, setAvailabletickets] = useState([]);

  return (
    <div>
      <h2>Tickets</h2>
      <h3>Regular</h3>
      <h3>799</h3>
      <Link to="/tickets-number" addToCart={props.addToCart}>Buy regular tickets here</Link>
      <h3>VIP</h3>
      <h3>1299</h3>
      <Link to="/tickets-number">Buy vip tickets here</Link>

      <p>arena 1 - is available: </p>
      <p>arena 2 - is available: </p>
      <p>arena 3 - is available: </p>
      <p>arena 4 - is available: </p>
      <p>arena 5 - is available: </p>
    </div>
  );
}

export default TicketSection;
