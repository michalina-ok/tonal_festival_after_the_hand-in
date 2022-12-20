import React from "react";
import Timer from "./Timer";

function Review(props) {
  console.log(props.cart);
  function getTotal() {
    let total = 0;
    props.cart.forEach((item) => {
      total += item.amount * item.price;
    });

    return total;
  }
  return (
    <div className="Review">
      <h2>Please review your order</h2>
      <div className="card">
      <h3>Your products</h3>
      <ul>
      {props.cart.map((item) => (
        <li key={item.id}>
          {item.name} {item.amount}x {item.price},-
        </li>
       
      ))}
       </ul>
     
  
       <h3>Your area</h3>
      <p>{props.order.area}</p>
      <h3>Visitors</h3>
      {props.order.visitors.map((item, index) => (
        <p key={index}>{item}</p>
      ))}
        </div>

      <p>YOUR TOTAL: {getTotal()} DKK </p>

      <button className="round" onClick={props.nextPage}>Continue</button>
    </div>
  );
}

export default Review;
