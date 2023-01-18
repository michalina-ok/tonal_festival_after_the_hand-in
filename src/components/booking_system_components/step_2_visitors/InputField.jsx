function InputField(props) {
  return (
    <div className="input-guest">
      <h3>Guest {props.number}</h3>

      <label htmlFor="form-name">Full name</label>
       
        <input required type="text" name="name" id="form-name" pattern="[a-zA-Z-']{1,}(\s[a-zA-Z-']{1,}){1,6}" title="Please include both your names and last name"></input>
      
    </div>
  );
}

export default InputField;
