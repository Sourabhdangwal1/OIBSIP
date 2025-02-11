function convertTemperature() {
    let temp = parseFloat(document.getElementById("tempInput").value);
    let unit = document.getElementById("unitSelect").value;
    let result = document.getElementById("result");

    if (isNaN(temp)) {
        result.innerHTML = "⚠ Please enter a valid number!";
        return;
    }

    let convertedTemp = "";

    if (unit === "celsius") {
        convertedTemp = `🌡️ Fahrenheit: ${(temp * 9/5 + 32).toFixed(2)}°F | Kelvin: ${(temp + 273.15).toFixed(2)}K`;
    } else if (unit === "fahrenheit") {
        convertedTemp = `🌡️ Celsius: ${((temp - 32) * 5/9).toFixed(2)}°C | Kelvin: ${(((temp - 32) * 5/9) + 273.15).toFixed(2)}K`;
    } else {
        convertedTemp = `🌡️ Celsius: ${(temp - 273.15).toFixed(2)}°C | Fahrenheit: ${((temp - 273.15) * 9/5 + 32).toFixed(2)}°F`;
    }

    result.innerHTML = convertedTemp;
}
