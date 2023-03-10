



![Demo](https://github.com/z-bj/Make-it-blink/blob/main/Make-it-Blink.gif)

# Make-it-blink

![React](https://img.shields.io/badge/React-61DAFB.svg?style=for-the-badge&logo=React&logoColor=black)![js](https://img.shields.io/badge/JavaScript-F7DF1E.svg?style=for-the-badge&logo=JavaScript&logoColor=black)![html](https://img.shields.io/badge/HTML5-E34F26.svg?style=for-the-badge&logo=HTML5&logoColor=white)![css](https://img.shields.io/badge/CSS3-1572B6.svg?style=for-the-badge&logo=CSS3&logoColor=white)

> "Make it blink!"is a React app that creates a blinking effect for the text entered by the user.<br>
It allows the user to enter text and create a blinking effect for the text.

## Implementation

To implement the blinking effect, the app uses `setInterval` to update the color of each character every `blinkSpeed` milliseconds. The color of each character is determined by cycling through an array of colors.

### useEffect

``` javascript

useEffect(() => { const intervalId = setInterval(() => { 

 setColorIndex((prevColorIndex) => (prevColorIndex + 1) % 6); }, blinkSpeed);
   return () => clearInterval(intervalId);
 }
, [blinkSpeed]
);
```

This code sets up an **effect** to run after the component has rendered using the `useEffect` hook. It creates an interval using `setInterval`, which will run the callback function every `blinkSpeed` milliseconds. Inside the callback, the `setColorIndex` function is called with a callback that increments the `colorIndex` state variable by 1 and then takes the remainder when divided by 6. This creates a cycling effect through an array of six colors. Finally, the interval is cleared when the component is unmounted using `clearInterval`. The `useEffect` hook takes the `blinkSpeed` state variable as a dependency, which means that the effect will be re-run if `blinkSpeed` changes

### .map()

``` javascript

const coloredString = inputValue.split("").map((char, index) => (

<span key={index} style={{ color: colors[(index + colorIndex) % 6] }}> {char} </span>

));

```


***This code defines a variable named `coloredString` using the `map` function to transform each character in the `inputValue` string into a `<span>` element.***

1) The `map` function iterates through each character of `inputValue` using `split("")`, which returns an array of each character.

2) For each character, a `<span>` element is created with a `key` attribute set to the `index` parameter passed to the callback function.

3) The `style` attribute of each `<span>` element is set using an object literal that sets the `color` attribute to the color at the `(index + colorIndex) % 6` position in the `colors` array. 
 
4) This expression creates a cycling effect through the six colors in the array based on the index of the character and the current value of the `colorIndex` state variable. 

>The expression `(index + colorIndex) % 6` is used to cycle through the six colors in the `colors` array based on the index of each character and the current value of the `colorIndex` state variable.

>The `%` (modulo) operator calculates the remainder of dividing the sum of the `index` and `colorIndex` values by `6`. This results in a value between `0` and `5`, which is used as the index to access the corresponding color in the `colors` array.

>By adding the current value of `colorIndex` to the index of each character, the colors will cycle through the array as the value of `colorIndex` is incremented. When `colorIndex` is `0`, the first color in the array will be used for all characters. When `colorIndex` is `1`, the second color will be used, and so on. When `colorIndex` is `6` or higher, it will reset back to `0`, so the cycle can repeat.


5) Finally, the text of each `<span>` element is set to the corresponding character in the `inputValue` string using the `char` parameter. 

6) The resulting `coloredString` variable is a React element that can be rendered to display the input text with the cycling colors.


## Features

-   User can enter text to create a blinking effect
-   User can adjust the speed of the blinking effect using a range input
-   Text blinks with a variety of colors

## Colors

<table>
  <thead>
    <tr>
      <th>Color Code</th>
      <th>Color Name</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>#333333</td>
      <td>dark gray</td>
    </tr>
    <tr>
      <td>#666666</td>
      <td>gray</td>
    </tr>
    <tr>
      <td>#999999</td>
      <td>light gray</td>
    </tr>
    <tr>
      <td>#FFA500</td>
      <td>orange</td>
    </tr>
    <tr>
      <td>#FFA07A</td>
      <td>light salmon</td>
    </tr>
    <tr>
      <td>#FF8C00</td>
      <td>dark orange</td>
    </tr>
  </tbody>
</table>

## Fonts

The font family and font sizes are defined using **Google Fonts** and [**TypeScale**](https://typescale.com/).

-   "Permanent Marker" , cursive
-   "Raleway", sans-serif


## Installation

To run this app on your local machine:

1.  Clone the repository using `git clone https://github.com/z-bj/Make-it-blink.git`.
2.  Navigate to the project directory using `cd Make-it-blink.
3.  Install the dependencies using `npm install`.
4.  Start the development server using `npm start`.

## Contributing

Contributions are welcome! To contribute to this project:

1.  Fork the repository.
2.  Make your changes.
3.  Submit a pull request.

## License

This project is licensed under the [MIT License](https://opensource.org/licenses/MIT).
