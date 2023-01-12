import { useState } from "react";

export default function Alert(props) {
  const [isShown, setIsShown] = useState(true)
function handleClose() {
  setIsShown(false)
}
    return (
       
        <div className={isShown ? "Alert" : "Alert hide"}>
            <button onClick={handleClose}>x</button>
               <p>{props.message}</p>
          </div>
           
      );
    }