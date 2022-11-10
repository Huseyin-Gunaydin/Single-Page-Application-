import {calculateCelsiusToFahrenheit, calculateFahrenheitToCelsius} from "../modules/degree-calculation.js";
import changeColor from "../modules/change-color.js";

const fahrenheitButton = document.querySelector("#calculate-fh");
const celciusButton = document.querySelector("#calculate-c");


/* const calculateCelsiusToFahrenheit = (celciusDegree = 100)=>{
    return (celciusDegree * 1.8 + 32).toFixed(2)
}

const calculateFahrenheitToCelsius = (fahrenheitDegree=212)=>{
    return ((fahrenheitDegree  - 32) * (5/9)).toFixed(2)
} */

fahrenheitButton.addEventListener("click", () => {
changeColor(document.querySelector("#c-to-fh-headline"));
  const degree = fahrenheitButton.previousElementSibling.value;
  const calculatedDegree = calculateCelsiusToFahrenheit(degree);
  fahrenheitButton.nextElementSibling.innerText = `${calculatedDegree} Grad Fahrenheit`;
});

celciusButton.addEventListener("click", () => {
  changeColor(document.querySelector("#fh-to-c-headline"));
  const degree = celciusButton.previousElementSibling.value;
  const calculatedDegree = calculateFahrenheitToCelsius(degree);
  celciusButton.nextElementSibling.innerText = `${calculatedDegree} Grad Fahrenheit`;
});

