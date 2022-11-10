const calculateCelsiusToFahrenheit = (celciusDegree = 100)=>{
    return (celciusDegree * 1.8 + 32).toFixed(2)
}

const calculateFahrenheitToCelsius = (fahrenheitDegree=212)=>{
    return ((fahrenheitDegree  - 32) * (5/9)).toFixed(2)
};

export {calculateCelsiusToFahrenheit, calculateFahrenheitToCelsius};