import React from "react";

function Ticket(props) {
  function add(data) {
    // ADD TO CART
    props.addToCart(props.product);
    //props.addToOrder(props.product)

    // ADD TO ORDER
    props.setOrder({
      ...props.order,
      tickets: {
        ...props.order.tickets,
        type: props.product.type,
        amount: props.product.amount,
      },
    });
  }

  return (
    <div>
      {" "}
      <article className="Product">
        <h3>{props.product.name}</h3>
        <h4>{props.product.price} DKK</h4>
        <button onClick={add}>Add to a basket</button>
      </article>
    </div>
  );
}

export default Ticket;
