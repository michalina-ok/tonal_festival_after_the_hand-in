import React from "react";

function InputField(props) {
  return (
    <div className="input-guest">
      <h3>Guest {props.number}</h3>

      <label htmlFor="form-name">
        Full name
        <input required type="type" name="name" id="form-name"></input>
      </label>
    </div>
  );
}

export default InputField;
