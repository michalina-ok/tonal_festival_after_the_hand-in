import React from "react";
import { Link } from "react-router-dom";

function TicketSection() {
  return (
    <div className="TicketSection">
      <h2>Tickets</h2>
      <div className="ticket-cards">
        <div className="ticket-card">
          <div className="header-ticket-card">
            <h3>Regular</h3>
            <p className="price">799 DKK</p>
          </div>
          <p>7-day pass that include access to the festival site, a spot on our camping field and and a welcome pack.</p>
        </div>
        <div className="ticket-card">
          <div className="header-ticket-card">
            <h3>VIP</h3>
            <p className="price">1299 DKK</p>
          </div>
          <p>7-day pass that include access to the festival site, a spot on our camping field and and a welcome pack.</p>
        </div>
      </div>
      <Link to="/form">Buy tickets here</Link>
    </div>
  );
}

export default TicketSection;
