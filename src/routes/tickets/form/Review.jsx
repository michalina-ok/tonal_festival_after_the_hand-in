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
    <div>
      <h2>Please review your order</h2>
      {props.cart.map((item) => (
        <li key={item.id}>
          {item.name} {item.amount}x {item.price},-
        </li>
      ))}
      <p>You have chosen {props.order.area} area</p>
      <p>Visitors:</p>
      {props.order.visitors.map((item, index) => (
        <p key={index}>{item}</p>
      ))}

      <p>YOUR TOTAL: {getTotal()} </p>

      <button onClick={props.nextPage}>Looks good, let's pay!</button>
    </div>
  );
}

export default Review;
