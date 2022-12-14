import React from 'react'

function LineUp(props) {
  const limit = 7;
  return (
    <div className="LineUp">
        {props.bands.slice(0, limit).map((band) => (
    <p key={band.name}>{band.name}</p>
          ))}
    </div>
  )
}

export default LineUp