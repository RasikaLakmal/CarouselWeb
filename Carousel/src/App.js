import "./App.css";
import Carousel from "./Components/Carousel";
import CarouselData from "./Assets/CarouselData";
import React from "react";
function App() {
  return (
    <div className="App">
      <CarouselData Slides='2'Infinite='true'/>
    </div>
  );
}

export default App;