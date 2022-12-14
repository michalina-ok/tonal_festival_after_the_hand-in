import React from "react";
import { useRef } from "react";
import { useState } from "react";
import InputField from "./InputField";

function VisitorsDetails(props) {
  //   const handleFormChange = (index, event) => {
  //     let data = [...inputFields];
  //     data[index][event.target.name] = event.target.value;
  // }

  function handleClick(e) {
    e.preventDefault();
    const inputValues = [...theForm.current.querySelectorAll("input")].map((e) => e.value);
    props.setOrder({
      ...props.order,
      visitors: inputValues,
    });
    changePage()
    console.log(props.page)

  }

  function changePage(){
    props.setPage(oldPage => oldPage + 1)
  }
let i = 0;
  const theForm = useRef(null);

  function goBack() {
    props.setPage(oldPage => oldPage - 1)
  }

  return (
    <div>
      <h2>Who's partying with us?</h2>
      <p>The tickets are personal which means we need to know the name of each ticket holder. If you’d like to pass your ticket to someone else later on, please contact our customer service.</p>
      <form ref={theForm}>
        {[...Array(props.ticketNumbers)].map((index) => (
          <InputField  cart={props.cart} key={i++} number={i+1}/>
        ))}
        <button onClick={goBack}>Go back</button>
        <button onClick={handleClick}>Continue</button>
      </form>
    </div>
  );
}

/*
isActive : bla bla
*/

export default VisitorsDetails;
