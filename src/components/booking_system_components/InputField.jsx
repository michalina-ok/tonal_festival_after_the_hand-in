function InputField(props) {
  return (
    <div className="input-guest">
      <h3>Guest {props.number}</h3>

      <label htmlFor="form-name">Full name</label>
       
        <input required type="type" name="name" id="form-name"></input>
      
    </div>
  );
}

export default InputField;
