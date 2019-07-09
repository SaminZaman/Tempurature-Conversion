// Calculate celcius from fahrenheit
"use strict";


//Event listener
document.getElementById("convert-btn").addEventListener("click", convertTemp);

// Event function
function convertTemp() {
    //Input in Fahrenheit
    let temp = document.getElementById("temp").value;

    //Process (convert)
    let finaltemp = (temp - 32) * (5/9)

    //Output in Celcius
    document.getElementById("finalTemp").innerHTML = finaltemp
}



