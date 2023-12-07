// Function to get input values
function getInputValues() {
    let num1 = parseFloat(document.getElementById("first").value);
    let num2 = parseFloat(document.getElementById("second").value);
    return [num1, num2];
}

// Function to update result on the page
function updateResult(result) {
    document.getElementById("result").innerText = isNaN(result) ? "Invalid input. Please enter valid numbers." : result;
}

// Function to perform addition
function addition() {
    let [num1, num2] = getInputValues();
    updateResult(num1 + num2);
}

// Function to perform subtraction
function subtraction() {
    let [num1, num2] = getInputValues();
    updateResult(num1-num2);
}
console.log(subtraction());

// Function to perform multiplication
function multiplication() {
    let [num1, num2] = getInputValues();
    updateResult(num1 * num2);
}

// Function to perform division
function divide() {
    let [num1, num2] = getInputValues();
    if (num2 !== 0) {
        updateResult(num1 / num2);
    } else {
        updateResult("Cannot divide by zero.");
    }
}

// Function to perform modulus
// function modulus() {
//     let [num1, num2] = getInputValues();
//     if (num2 !== 0) {
//         updateResult(num1 % num2);
//     } else {
//         updateResult("Cannot calculate modulus with zero.");
//     }
// }

 // Function to perform modulus
function modulus() {
    let [num1, num2] = getInputValues();
    if (num2 !== 0) {
        let modulus = (num1 / num2) * 100;
        updateResult(modulus);
    } else {
        updateResult("Cannot calculate modulus with zero.");
    }
}
