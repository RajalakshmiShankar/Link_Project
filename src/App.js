import React from "react";
import "./App.css";
import Navbar from "./components/Navbar/navbar";
import Carousel from "./components/Carousel/Carousel";
import Stats from "./components/Stats/Stats";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div className='App'>
      <Navbar />
      <Carousel />
      <Stats />
      <Footer />
    </div>
  );
}

export default App;
