// Taking of different variables...

const firstNumber = parseInt(prompt("Enter the first number"));
const secondNumber = parseInt(prompt("Enter the second number"));

// For taking the operations
const operation = prompt("Enter the operation");

//Conditional statement
if (operation == "add") {
    console.log("The sum of two numbers is " + firstNumber + secondNumber);
}
if (operation == "sub") {
    console.log("The sum of two numbers is " + firstNumber - secondNumber);
}
if (operation == "mul") {
    console.log("The sum of two numbers is " + firstNumber * secondNumber);
}
if (operation == "div") {
    console.log("The sum of two numbers is " + firstNumber / secondNumber);
}