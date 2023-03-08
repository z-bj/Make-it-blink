import React, { useState, useEffect } from "react";
import "./index.css";
import backgroundImg from "./img/ART_RGB_CMYK_PANTONE-transformed.webp";

function App() {
  const [inputValue, setInputValue] = useState("");
  const [colorIndex, setColorIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setColorIndex((prevColorIndex) => (prevColorIndex + 1) % 6);
    }, 150);

    return () => clearInterval(intervalId);
  }, []);

  const colors = ["red", "green", "blue", "cyan", "magenta", "black"];

  const coloredString = inputValue.split("").map((char, index) => (
    <span key={index} style={{ color: colors[(index + colorIndex) % 6] }}>
      {char}
    </span>
  ));

  return (
    <div class="card">
      <div class="tools">
        <div class="circle">
          <span class="red box"></span>
        </div>
        <div class="circle">
          <span class="yellow box"></span>
        </div>
        <div class="circle">
          <span class="green box"></span>
        </div>
      </div>
      <div class="card__content">
        <div id="center">
          <div>
            <h2>
              YOU KNOW<span>...</span>
            </h2>
            <div>
              <img src={backgroundImg} alt="background image" id="center" />
              <h3>
                So, blink that text<span>!</span> 🚨
              </h3>
              <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                placeholder="Enter text here..."
                id="center"
              />
              {/* <hr /> */}
              <h2>{coloredString}</h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
