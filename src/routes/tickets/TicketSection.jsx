import React from 'react'
import { Link } from 'react-router-dom'
function TicketSection() {
  return (
    <div>
        <h2>Tickets</h2>
        <h3>Regular</h3>
        <h3>799</h3>
        <Link to='/tickets-number'>Buy tickets here</Link>
        <h3>VIP</h3>
        <h3>1299</h3>
        <Link to='/tickets-number'>Buy tickets here</Link>

    </div>
  )
}

export default TicketSection