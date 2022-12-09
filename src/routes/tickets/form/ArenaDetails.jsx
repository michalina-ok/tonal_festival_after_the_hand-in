import React from "react";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

function ArenaDetails(props) {
  const [areas, setAreas] = useState([]);

  useEffect(() => {
    async function getData() {
      const res = await fetch("http://localhost:8080/available-spots/");
      const data = await res.json();
      setAreas(data);
    }
    getData();
  }, []);

  //console.log(Object.values(areas));

  return (
    <div>
      <h2>Choose your arena here</h2>
      {areas.map((area) => (
        <p>
          {area.area} : {area.available} / {area.spots} - is available:
        </p>
       
      ))}
       <button onClick={props.updateBasket}>Choose arena</button>
    </div>
  );
}

export default ArenaDetails;
