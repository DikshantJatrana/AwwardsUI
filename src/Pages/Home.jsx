import React from "react";
import Hero from "../Components/Hero";
import About from "../Components/about";
import Navbar from "../Components/Navbar";
import Feature from "../Components/Feature";

function Home() {
  return (
    <div className="relative w-screen min-h-screen overflow-x-hidden">
      <Navbar />
      <Hero />
      <About />
      <Feature />
    </div>
  );
}

export default Home;
