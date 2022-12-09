import React from 'react'
import { useRef } from 'react';

function VisitorsDetails() {
    const theForm = useRef(null);
  return (
    <div>
        <h2>Names of the ticketholders</h2>
            <form ref={theForm}>
        <div className="form-control">
        
          <label htmlFor="form-name">Name for tickets 1</label>
          <input type="type"name="name" id="form-name"></input>
        </div>
        <div className="form-control">
        
        <label htmlFor="form-email">Name for ticket 2</label>
        <input type="type" name="email" id="form-email"></input>
      </div>
      <div className="form-control">
        
        <label htmlFor="form-email">Name for ticket 3</label>
        <input type="type" name="email" id="form-email"></input>
      </div>
      </form>
      <button>Done</button>
    </div>
  )
}

export default VisitorsDetails