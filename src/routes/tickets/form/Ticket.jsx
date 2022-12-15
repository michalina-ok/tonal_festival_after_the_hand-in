import React from "react";

function Ticket(props) {
  function add() {
    props.addToCart(props.product);
  }

  function remove() {
    props.removeFromCart(props.product)
  }
  return (
    <div>
      {" "}
      <article className="Product">
        <div className="ticket-item">
          <p>{props.product.name}</p>
          <p>{props.product.price} DKK</p>{" "}
          <button className="plus-minus" onClick={remove}>
            -
          </button>
          <div>{props.cart.filter((item) => item.id === props.product.id).length === 0 ? "0" : props.cart.filter((item) => item.id === props.product.id).map((item) => <p key={item.id}>{item.amount}</p>)}</div>
          <button className="plus-minus" onClick={add}>
            +
          </button>
        </div>
      </article>
    </div>
  );
}

export default Ticket;
