// Taking the inputs and storing in the variables.
const firstContent = document.getElementById("firstNumber");
const secondContent = document.getElementById("secondNumber");

//For taking the value in h1 tag of Html
let headingContent = document.getElementById("result").textContent;
//console.log(headingContent);

// For taking the values from the different buttons.
const operationAdd = document.getElementById("add");
const operationSub = document.getElementById("sub");
const operationMul = document.getElementById("mul");
const operationDiv = document.getElementById("div");

// The onclick section for the different buttons present in the html file
// For the sum of the two numbers
operationAdd.onclick = function() {
    const firstNumber = parseFloat(firstContent.value);
    const secondNumber = parseFloat(secondContent.value);
    const add = firstNumber + secondNumber;
    headingContent.textContent = `The sum is ${add}`;
    //console.log(add);
};

//For the difference of two numbers
operationSub.onclick = function() {
    const firstNumber = parseFloat(firstContent.value);
    const secondNumber = parseFloat(secondContent.value);
    const sub = firstNumber - secondNumber;
    headingContent.textContent = "The difference is " + sub;
    //console.log(sub);
};

// For the multiplication of two numbers
operationMul.onclick = function() {
    const firstNumber = parseFloat(firstContent.value);
    const secondNumber = parseFloat(secondContent.value);
    const mul = firstNumber * secondNumber;
    headingContent.textContent = "The multiplication is " + mul;
    //console.log(mul);
};

// For the division of two numbers
operationDiv.onclick = function() {
    const firstNumber = parseFloat(firstContent.value);
    const secondNumber = parseFloat(secondContent.value);
    const div = firstNumber / secondNumber;
    headingContent.textContent = "The division is " + div;
    //console.log(div);
};