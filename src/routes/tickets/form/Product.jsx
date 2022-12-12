import React from "react";

function Product(props) {

  function add() {
    props.addToCart(props.product);
    props.addToOrder(props.product)
  }

  return (
    <div>
      {" "}
      <article className="Product">
        <h3>{props.product.type}</h3>
        <h4>{props.product.price} DKK</h4>
        <button onClick={add}>Add to a basket</button>
      </article>
    </div>
  );
}

export default Product;
