import React from "react";
import "./App.css";
import { Carousel } from "./components";
import { IMAGES } from "../src/mock";
import Example from "./components/Example";
const App = () => {
  return (
    <div className="App">
      {/* <div className="container p-3">
        <Carousel time={3000}>
          { 
            IMAGES.map((image, index) => <img key={index} src={image.imageUrl} alt={image.placeHolder} />) 
          }
        </Carousel>
      </div> */}
      <Example />
    </div>
  );
};

export default App;
