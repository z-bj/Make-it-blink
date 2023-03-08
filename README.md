# Make it blink!

![React](https://img.shields.io/badge/React-17.0.2-blue?logo=React) ![CSS3](https://img.shields.io/badge/CSS3-3.0.0-blue?logo=CSS3) ![JavaScript](https://img.shields.io/badge/JavaScript-ES6-yellow?logo=JavaScript)

"Make it blink!" is a React Text Blinker application that blinks the text input by the user. The color of each letter of the input text changes every 150ms in a looping manner. The color sequence is `red`, `green`, `blue`, `cyan`, `magenta`, and `black`.

## Implementation

This project is implemented using React, CSS, and JavaScript. The main functionality of the project is implemented in `App.js`. The `useEffect` hook is used to change the color of the text every 150ms by updating the `colorIndex` state. The color of each letter is determined by an array of colors defined in `colors`. The color of each letter is set using inline CSS.

The styling of the application is done using CSS. The root CSS variables are used to define the width, height, and border-radius of the card. The font family and font sizes are defined using Google Fonts. The colors of the circles in the tool section are defined using CSS variables.

## Features

-   Blinking text with changing colors
-   Color sequence: `red`, `green`, `blue`, `cyan`, `magenta`, `black`
-   Mobile first design
-   Simple and easy-to-use interface
-   Hosting on github Pages

## Core

A simple `useEffect` hook to create an interval that updates the color of each character in an input string.
<br>Here's a breakdown of the code:

```javascript 
useEffect(() => {
  const intervalId = setInterval(() => {
    setColorIndex((prevColorIndex) => (prevColorIndex + 1) % 6);
  }, 150);

  return () => clearInterval(intervalId);
}, []);
```

This `useEffect` hook sets up an interval that calls the `setColorIndex` function every 150 milliseconds. The `setColorIndex` function updates the `colorIndex` state variable to the next index in the `colors` array. The function passed to `setColorIndex` uses the previous value of `colorIndex` to calculate the next index by adding 1 and taking the remainder of dividing by 6 (which ensures that the index always stays within the bounds of the `colors` array).

The `return` statement in the `useEffect` hook is a cleanup function that clears the interval when the component unmounts. The empty dependency array `[]` tells React to only run this effect once when the component mounts, and not to re-run it on subsequent updates.

```javascript
const colors = ["red", "green", "blue", "cyan", "magenta", "black"];

const coloredString = inputValue.split("").map((char, index) => (
  <span key={index} style={{ color: colors[(index + colorIndex) % 6] }}>
    {char}
  </span>
));
```

This code defines an array of six colors, and then creates a new array `coloredString` by splitting the `inputValue` string into an array of characters and mapping over it with a function. The mapping function creates a new `span` element for each character, with the `style` attribute set to change the color of the text based on the current value of `colorIndex`. The `key` attribute is set to the index of the current character, which helps React to efficiently re-render the elements when the `coloredString` array changes.



## Installation

1.  Clone the repository: `git clone https://github.com/example/example.git`
2.  Navigate to the project directory: `cd example`
3.  Install the dependencies: `npm install`
4.  Run the application: `npm start`

## Contributing

Contributions are always welcome! If you have any suggestions or find any bugs, please open an issue or a pull request.

## License

This project is licensed under the [MIT License](https://chat.openai.com/LICENSE).
