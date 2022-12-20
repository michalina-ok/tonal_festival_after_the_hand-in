import React from 'react'

function LineUp(props) {
  const limit = 7;
  return (
    <div className="LineUp">
              <div className="lineup-header">line-up ↓ line-up ↓ line-up ↓ line-up ↓ line-up ↓ line-up ↓ line-up ↓ line-up ↓ line-up ↓ line-up ↓ line-up ↓ line-up ↓ line-up</div>
        {props.bands.slice(0, limit).map((band) => (
    <p key={band.name}>{band.name}</p>
          ))}
    </div>
  )
}

export default LineUp