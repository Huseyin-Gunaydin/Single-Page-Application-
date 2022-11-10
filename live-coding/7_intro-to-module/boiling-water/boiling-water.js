const button = document.querySelector("#toggle-degree");
const text = document.querySelector("#boiling-water-text");

const calculateCelsiusToFahrenheit = (celciusDegree = 100)=>{
    return (celciusDegree * 1.8 + 32).toFixed(2)
}

const calculateFahrenheitToCelsius = (fahrenheitDegree=212)=>{
    return ((fahrenheitDegree  - 32) * (5/9)).toFixed(2)
}


button.addEventListener("click", ()=> {

    const isFahrenheit = button.innerText == "Fahrenheit";
    button.innerText = isFahrenheit ? "Celsius" : "Fahrenheit";
    const boilingWater = isFahrenheit ? calculateCelsiusToFahrenheit() : calculateFahrenheitToCelsius();
    text.innerText = isFahrenheit ?  boilingWater + " Grad Fahrenheit" : boilingWater+ " Grad Celcius"; 

}) 