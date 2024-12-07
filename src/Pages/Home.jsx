import React from "react";
import Hero from "../Components/Hero";
import About from "../Components/about";

function Home() {
  return (
    <div className="relative w-screen min-h-screen overflow-x-hidden">
      <Hero />
      <About />
      <div className="h-screen w-full bg-black"></div>
    </div>
  );
}

export default Home;
