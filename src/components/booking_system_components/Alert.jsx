import { useState } from "react";

export default function Alert(props) {
function handleClose() {
  props.setIsAlertShown(false)
}
    return (
       
        <div className={props.isAlertShown ? "Alert" : "Alert hide"}>
            <button onClick={handleClose}>x</button>
               <p>{props.message}</p>
          </div>
           
      );
    }