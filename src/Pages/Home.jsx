import React from "react";
import Hero from "../Components/Hero";
import About from "../Components/about";
import Navbar from "../Components/Navbar";
import Feature from "../Components/Feature";
import Story from "../Components/Story";
import WordsSection from "../Components/WordsSection";
import Contact from "../Components/Contact";
import Footer from "../Components/Footer";

function Home() {
  return (
    <div className="relative w-screen min-h-screen overflow-x-hidden">
      <Navbar />
      <Hero />
      <About />
      <Feature />
      <Story />
      <WordsSection />
      <Contact />
      <Footer />
    </div>
  );
}

export default Home;
