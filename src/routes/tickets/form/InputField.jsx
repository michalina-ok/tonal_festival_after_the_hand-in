import React from 'react'

function InputField(props) {
  return (
    <div>

   {props.cart.map((item) => (
          <h3 key={item.id}>
          {item.type} ticket {props.number}
          </h3>
        ))}
    <label htmlFor="form-name">Full name</label>
    <input  type="type" name="name" id="form-name"></input>
  </div>
  )
}

export default InputField