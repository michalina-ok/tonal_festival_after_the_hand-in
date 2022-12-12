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
          {item.type} x {item.amount},-{item.price}
          </li>
        ))}
        <p>Chosen area: {props.order.chosenArea}</p>
        <p>Visitors:</p> 
        {props.order.visitorsNames.map((item, index) => <p key={index}>{item}</p>) }




      <p>YOUR TOTAL: {getTotal()} </p>

      <button>Looks good, let's pay!</button>
    </div>
  );
}

export default Review;
