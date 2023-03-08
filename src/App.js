import React, { useState, useEffect } from 'react';
import './index.css';


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
    <div id="center">
      <div>
        <h3>Make it Blink<span> !</span></h3>
        <p>You know...<br></br></p>
        <img src="https://github.com/z-bj/RGB-is-not-CMYK-is-not-PANTONE/blob/master/ART_RGB_CMYK_PANTONE.png" alt="" />
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          placeholder="Make your text blink..."
        />
        <div>
          
          <hr></hr>
          <h4>{coloredString}</h4>
        </div>
      </div>
    </div>
  );
}

export default App;
