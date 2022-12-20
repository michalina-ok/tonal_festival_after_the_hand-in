import React from 'react'

function Success() {
  return (
    <div className="Success">
      <h2>Order received</h2>
      <h3>The tickets were sent to your e-mail address</h3>
      <h3>We can't wait to party with you soon</h3>

      <div className="app-cta">
      <h3>In the meantime check our app here</h3>
      <a href="https://tonal-festival-app.netlify.app/" className="round">Get the app</a>
      </div>
    </div>
  )
}

export default Success