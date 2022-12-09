import React from "react";

function Product(props) {
  const regularTicket = [{ type: "regular", amount: 1, price: 799 }];
  const vipTicket = [{ type: "vip", amount: 1, price: 799 }];

  function add() {
    props.addToCart(regularTicket);
  }

  return (
    <div>
      {" "}
      <article className="Product">
        <h3>regular ticket</h3>
        <button onClick={add}>Add to a basket</button>
      </article>
    </div>
  );
}

export default Product;
