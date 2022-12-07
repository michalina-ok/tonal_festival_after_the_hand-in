import { useEffect, useState } from "react";
import Hero from "./routes/tickets/Hero";
import React from "react";
import ReactDOM from "react-dom/client";
import LineUp from "./routes/tickets/LineUp";
import TicketSection from "./routes/tickets/TicketSection";
import Footer from "./routes/tickets/Footer";

function App() {
  const [bands, setBands] = useState([]);
  useEffect(() => {
    async function getData() {
      const res = await fetch("http://localhost:8080/bands");
      const data = await res.json();
      
      setBands(data);
    }
    getData();
  }, []);

  return (
    <div className="App">
      <Hero bands={bands} />
      <TicketSection />
      <LineUp bands={bands} />
      <Footer />
    </div>
  );
}

export default App;
