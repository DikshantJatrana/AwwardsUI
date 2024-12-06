import React from "react";
import "./App.css";
import Home from "./Pages/Home";

function App() {
  return (
    <div className="relative w-screen min-h-screen overflow-x-hidden">
      <Home />
      <div className="w-full h-screen bg-blue-75"></div>
    </div>
  );
}

export default App;
