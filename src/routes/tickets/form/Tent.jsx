import React from "react";

function Tent(props) {
  function add() {
    // ADD TO CART
    props.addToCart(props.product);
  }
  
  return (
    <div>
      {" "}
      <article className="Tent">
      <div className="ticket-item">
        <p>{props.product.name}</p> 
        <p>{props.product.price} DKK</p>
          {" "}
          <button className="plus-minus" onClick={add}>-</button>
          {props.cart
            .filter((item) => item.id === props.product.id)
            .map((item) => (
              <p key={item.id}>{item.amount}</p>
            ))}
          <button className="plus-minus" onClick={add}>+</button>
        </div>
      
      </article>
    </div>
  );
}

export default Tent;
