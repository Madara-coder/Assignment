// Dom Manipulation...
const loginElement = document.getElementById("message");
const LoginButton = document.getElementById("login");

LoginButton.onclick = function() {
    // Syntax :- variable.onclick or element.onclick
    // The use of the textContent -> is to enter the content as a text ...
    loginElement.textContent = "You are logged in";
    loginElement.textContent = "Log out";
};