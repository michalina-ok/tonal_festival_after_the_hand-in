import { useEffect, useState } from "react";
import Hero from "./routes/tickets/Hero";
import React from "react";
import LineUp from "./routes/tickets/LineUp";
import TicketSection from "./routes/tickets/TicketSection";
import Footer from "./routes/tickets/Footer";
import "./index.scss";

function App() {
  const [bands, setBands] = useState([]);

  useEffect(() => {
    async function getData() {
      const url1="http://localhost:8080" 
      const url2="https://tonal-fest.fly.dev"  
      const res = await fetch(url2 + "/bands");
      const data = await res.json();
      setBands(data);
    }
    getData();
  }, []);

  return (
    <div className="App">
      <Hero />
      <TicketSection />
      <LineUp bands={bands} />
    </div>
  );
}

export default App;
