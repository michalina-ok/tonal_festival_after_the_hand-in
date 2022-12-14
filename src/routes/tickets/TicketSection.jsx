import React from "react";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

function TicketSection(props) {
  return (
    <div className="TicketSection">
      <h2>Tickets</h2>
      <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
      <div className="tickets-info">
        <h3>Regular</h3>
        <p>799</p>
        <h3>VIP</h3>
        <p>1299</p>
      </div>
      <Link to="/form">
        <button>Buy tickets here</button>
      </Link>
    </div>
  );
}

export default TicketSection;
