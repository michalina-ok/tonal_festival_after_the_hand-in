import React from 'react'
import { useRef } from 'react';
import { useState } from 'react';

function VisitorsDetails(props) {
  const [ticketholderName, setTicketholderName] = useState('')



    function add() {
      const ticketholdersNames = {names: []}
     ticketholdersNames.names.push(ticketholderName)
      props.addToOrder(ticketholdersNames)
    }
   
  
    const theForm = useRef(null);

  return (
    <div>
        <h2>Names of the ticketholders</h2>
            <form ref={theForm}>
            {[...Array(props.ticketNumbers)].map((item) =>        
            <div key={item} className="form-control" >
        
        <label htmlFor="form-email">Name for ticket {props.ticketNumbers}</label>
        <input value={ticketholderName} onChange={(event) => setTicketholderName(event.target.value)} type="type" name="email" id="form-email"></input>
      </div>)}
      </form>
      <button onClick={add}>Save</button>
    </div>
  )
}


export default VisitorsDetails





