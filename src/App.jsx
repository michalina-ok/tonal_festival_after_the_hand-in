import { useEffect, useState } from "react";

import Hero from "./components/landing_page_components/Hero";
import LineUp from "./components/landing_page_components/LineUp";
import TicketSection from "./components/landing_page_components/TicketSection";
import Footer from "./components/landing_page_components/Footer";

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
