import React from 'react'

function Basket(props) {
console.log(props.cart)



  return (
    <section className="Basket">
      <ul>
        {props.cart.map((item) => (
          <li>
            {item.type} x {item.amount}, {item.price},-
           
          </li>
        ))}
      </ul>
      <h3>Total: </h3> 
    </section>
  );
}




export default Basket




