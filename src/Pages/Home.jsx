import React from "react";
import Hero from "../Components/Hero";
import About from "../Components/about";
import Navbar from "../Components/Navbar";
import Feature from "../Components/Feature";
import Story from "../Components/Story";
import WordsSection from "../Components/WordsSection";

function Home() {
  return (
    <div className="relative w-screen min-h-screen overflow-x-hidden">
      <Navbar />
      <Hero />
      <About />
      <Feature />
      <Story />
      <WordsSection />
    </div>
  );
}

export default Home;
