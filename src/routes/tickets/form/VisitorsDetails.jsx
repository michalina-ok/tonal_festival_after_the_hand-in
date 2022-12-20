import React from "react";
import { useRef } from "react";
import InputField from "./InputField";

function VisitorsDetails(props) {
  let i = 0;
  const theForm = useRef(null);

  function submit(e) {
    e.preventDefault();
    const inputValues = [...theForm.current.querySelectorAll("input")].map((e) => e.value);
    props.setOrder({
      ...props.order,
      visitors: inputValues,
    });
    props.nextPage();
  }

  return (
    <div className="VisitorsDetails">
      <h2>Who's partying with us?</h2>
      <p>The tickets are personal therefore we need to know the name of each ticket holder. If you’d like to pass your ticket to someone else later on, please contact our customer service.</p>
      <form onSubmit={submit} ref={theForm}>
        {[...Array(props.ticketNumbers)].map(() => (
          <InputField cart={props.cart} key={i++} number={i + 1} />
        ))}
        <div className="buttons">
          <button className="round" onClick={props.prevPage}>
            Go back
          </button>
          <button className="round">Continue</button>
        </div>
      </form>
    </div>
  );
}

export default VisitorsDetails;
