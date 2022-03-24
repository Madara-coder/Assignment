// Dom Manipulation...
const firstHeading = document.getElementById("emoji");
const loginButton = document.getElementById("login");

//Function for changing emoji of crying to smiling...

loginButton.onclick = function() {
    // Using if statement
    if (loginButton.textContent == "Click and see the magic") {
        firstHeading.textContent = "😁";
        loginButton.textContent = "Happy Face";
    }
    // Using elseif statement to  change the text content of emoji to robot
    else if (loginButton.textContent == "Happy Face") {
        firstHeading.textContent = "🤖";
        loginButton.textContent = "I am robot";
    }
    // Using else statement to again change the text content of emoji to crying
    else {
        firstHeading.textContent = "😭";
        loginButton.textContent = "Click and see the magic";
    }
};

// To make the jhilimili effect hahaha....(using setInterval function)
setInterval(function() {
    // in this my function name is "function" , so don't get confused...
    if (loginButton.textContent == "Click and see the magic") {
        firstHeading.textContent = "😁";
        loginButton.textContent = "Happy Face";
    }
    // Using elseif statement to  change the text content of emoji to robot
    else if (loginButton.textContent == "Happy Face") {
        firstHeading.textContent = "🤖";
        loginButton.textContent = "I am robot";
    }
    // Using else statement to again change the text content of emoji to crying
    else {
        firstHeading.textContent = "😭";
        loginButton.textContent = "Click and see the magic";
    }
}, 200); // 200 is for timing 200 is 0.2 sec