//Making the different functions in javaScript...
function greet() {
    alert("Welcome!");
}
setTimeout(greet, 2000);

//Another function
const loggedInUser = "Debrath";

function greetSecond(userName) {
    alert(" Welcome " + userName + "!");
}
setTimeout(greetSecond, 4000, loggedInUser);