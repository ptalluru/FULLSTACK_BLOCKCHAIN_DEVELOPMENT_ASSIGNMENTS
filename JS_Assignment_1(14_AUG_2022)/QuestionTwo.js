/**
 * 
 * @ptalluru
 * 
 * 2. Write a JavaScript program to convert temperatures to and from Celsius,Fahrenheit.
 * [ Formula : c/5 = (f-32)/9 [ where c = temperature in Celsius and f = temperature in Fahrenheit ]
 *Expected Output :
 * 60°C is 140 °F
 * 45°F is 7.222222222222222°C
 * 
 */


 // This method converts temperature from celsius to fahrenheit
 let celsiusToFahrenheit = (celsius) => {
    let result = ((celsius/5)*9)+32;
    return `${celsius}\u00B0C is ${result}\u00B0F`; // \u00B0 is unicode for degree symbol
 };

 // This method converts temperature from fahrenheit to celsius
 let fahrenheitToCelsius = (fahrenheit) => {
    let result = ((fahrenheit-32)/9)*5;
    return `${fahrenheit}\u00B0C is ${result}\u00B0F`; // \u00B0 is unicode for degree symbol
 };

console.log(celsiusToFahrenheit(60));
console.log(fahrenheitToCelsius(45));