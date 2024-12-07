import React from "react";
import Hero from "../Components/Hero";
import About from "../Components/about";
import Navbar from "../Components/Navbar";

function Home() {
  return (
    <div className="relative w-screen min-h-screen overflow-x-hidden">
      <Navbar />
      <Hero />
      <About />
      <div className="w-full h-screen bg-black mt-16"></div>
    </div>
  );
}

export default Home;
