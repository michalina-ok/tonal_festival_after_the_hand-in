import React from "react";
import { Link } from "react-router-dom";
import { useRef } from "react";

import { insertOrder } from "../../modules/db";
function Tickets1(props) {
  const theForm = useRef(null);
  console.log(props);
  async function submit(e) {
    insertOrder({});
  }

  return (
    <div>
      <h1>Buy your tickets</h1>
      <form onSubmit={submit} ref={theForm}>
        <div className="form-control">
          <label htmlFor="form-name">Name</label>
          <input required type="text" name="name" id="form-name"></input>
        </div>
        <div className="form-control">
          <label htmlFor="form-email">E-mail</label>
          <input required type="email" name="email" id="form-email"></input>
        </div>
        <p>Total: </p>
        <button>Pay</button>
      </form>
      <Link to="/tickets-arena">Choose your arena</Link>
    </div>
  );
}

export default Tickets1;
