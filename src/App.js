import React, { useState, useEffect } from 'react';
import './index.css';
import backgroundImg from './';

function App() {
  const [inputValue, setInputValue] = useState('');
  const [colorIndex, setColorIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setColorIndex((prevColorIndex) => (prevColorIndex + 1) % 6);
    }, 250);

    return () => clearInterval(intervalId);
  }, []);

  const colors = ['red', 'green', 'blue', 'cyan', 'magenta', 'black'];

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
        <h3>Make it Blink<span> !</span></h3>
        <div>
          <p>You know...</p>
          <img src={backgroundImg} alt="background image" />
          <input
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            placeholder="Enter text here..."
          />
          <hr />
          <h4>{coloredString}</h4>
        </div>
      </div>
    </div>
  </div>
</div>













 
  );
}

export default App;
