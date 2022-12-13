import React from "react";

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
        <p>Chosen area: {props.order.area}</p>
        <p>Visitors:</p> 
        {props.order.visitors.map((item, index) => <p key={index}>{item}</p>) }




      <p>YOUR TOTAL: {getTotal()} </p>

      <button>Looks good, let's pay!</button>
    </div>
  );
}

export default Review;
