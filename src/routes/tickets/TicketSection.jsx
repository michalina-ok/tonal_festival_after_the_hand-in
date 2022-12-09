import React from "react";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";


function TicketSection(props) {


  return (
    <div>
      <h2>Tickets</h2>
      <h3>Regular</h3>
      <h3>799</h3>
      <Link to="/form">Buy regular tickets here</Link>
      <h3>VIP</h3>
      <h3>1299</h3>
      <Link to="/form">Buy vip tickets here</Link>
    </div>
  );
}

export default TicketSection;
