import React from "react";
import { Link} from "react-router-dom";


function Tickets1() {

  return (
    <div>
      <h1>Buy your tickets</h1>
      <Link to='/tickets-arena'>Choose your arena</Link>
    </div>
  );
}

export default Tickets1;
