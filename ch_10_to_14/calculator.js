let num1 = prompt("Enter the first number:");
let num2 = prompt("Enter the second number:");
let operation = prompt("Enter the operation sign (+, -, *, /, %):");

if (operation === "+") {
    result = Number(num1) + Number(num2);
} else if (operation === "-") {
    result = Number(num1) - Number(num2);
} else if (operation === "*") {
    result = Number(num1) * Number(num2);
} else if (operation === "/") {
    result = Number(num1) / Number(num2);
} else if (operation === "%") {
    result = Number(num1) % Number(num2);
} else {
    console.log("Invalid operation");
}

alert(`The result is: ${result}`);