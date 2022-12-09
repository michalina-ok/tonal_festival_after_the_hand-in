import React from 'react'

function LineUp(props) {
  const limit = 7;
  return (
    <div>
        <h2>Lineup bby</h2>
        {props.bands.slice(0, limit).map((band) => (
    <p>{band.name}</p>
          ))}
    </div>
  )
}

export default LineUp