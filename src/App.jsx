import React, { useState, useEffect } from 'react';
import './App.css'
import backgroundImg from './assets/ART_RGB_CMYK_PANTONE-croped.webp';

function App() {
  const [inputValue, setInputValue] = useState('');
  const [colorIndex, setColorIndex] = useState(0);
  const [blinkSpeed, setBlinkSpeed] = useState(50);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setColorIndex((prevColorIndex) => (prevColorIndex + 1) % 6);
    }, blinkSpeed);

    return () => clearInterval(intervalId);
  }, [blinkSpeed]);

  const colors = [
    '#333333',
    '#666666',
    '#999999',
    '#FFA500',
    '#FFA07A',
    '#FF8C00',
  ];

  const coloredString = inputValue.split('').map((char, index) => (
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
            <h2 className="title">You know...</h2>
            <div>
              <img src={backgroundImg} alt="background image" id="center" />
              <h3>
                So, make it blink <span>!</span>
              </h3>
              <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                placeholder="Enter text here..."
                id="center"
              />

              <input
                type="range"
                min="0"
                max="1000"
                step="10"
                value={blinkSpeed}
                onChange={(e) => setBlinkSpeed(parseInt(e.target.value))}
                id="blinkSpeed"
                oninput="rangevalue.value=value"
              />
              <br />

              <output id="range">{blinkSpeed}/ms</output>
              <hr />
              <h3>{coloredString}</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
