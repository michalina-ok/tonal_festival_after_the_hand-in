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
          <p>7-day pass including a spot on our camping site</p>
          <Link to="/form">Buy tickets</Link>
        </div>
        <div className="ticket-card">
          <div className="header-ticket-card">
            <h3>VIP</h3>
            <p className="price">1299 DKK</p>
          </div>
          <p>7-day pass including a spot on our camping site and access to exclusive VIP-only events</p>
          <Link to="/form">Buy tickets</Link>
        </div>
      </div>
    </div>
  );
}

export default TicketSection;
