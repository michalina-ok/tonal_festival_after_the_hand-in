import React from "react";

function Basket(props) {
  function getTotal() {
    let total = 0;
    props.cart.forEach((item) => {
      total += item.amount * item.price;
    });
    console.log(props.cart)

    return total;
  }

  return (
    <section className="Basket">
      <ul>
        {props.cart.length === 0 && <div>Cart is empty</div>}
        {props.cart.map((item) => (
          <li key={item.id}>
            {item.name} x {item.amount},-{item.price}
          </li>
        ))}
      </ul>
      <h3>Total: {getTotal()} </h3>
    </section>
  );
}

export default Basket;
