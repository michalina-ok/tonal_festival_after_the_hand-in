import React from 'react'

function Area(props) {
    function add() {
        props.addToOrder({area: props.area.area})
      }
     
  return (
    <div>
         {props.area.available > 0 &&    
         <div className="available">
          <h2>{props.area.area}</h2>
          <p> {props.area.available} spot available out of {props.area.spots}</p>
          <button onClick={add}>Choose this area</button>
        </div>}
        {props.area.available <= 0 &&     
        <div className="unavailable">
        <h2>{props.area.area}</h2>
         <p>Sold out</p>
        </div>}
     
        
    </div>
  )
}

export default Area