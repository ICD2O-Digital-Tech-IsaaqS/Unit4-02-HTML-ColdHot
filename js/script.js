// Copyright (c) 2025 Isaaq Simon All rights reserved
//
// Created by: Isaaq Simon
// Created on: April 2025
// This file contains the JS functions for index.html
// Function to check the temperature input
function checkTemperature() {
    // Get the value from the input and convert to a number
    const celsius = parseFloat(document.getElementById('celsiusInput').value);

    // Get the element where we will display the result
    const result = document.getElementById('result');

    // Check if input is a valid number
    if (isNaN(celsius)) {
        result.textContent = "Please enter a valid number!";
        result.style.color = "orange";
    }
    else {
        // If temperature is less than 15
        if (celsius < 15) {
            result.textContent = "It is cold outside!";
            result.style.color = "blue"; // Cold = blue
        }
        else {
            result.textContent = "It is hot outside!";
            result.style.color = "red"; // Hot = red
        }
    }
}
