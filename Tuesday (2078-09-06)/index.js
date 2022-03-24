// event-listeners

const circusText = document.getElementById("circus");

const uppercaseBtn = document.getElementById("uppercase");
const lowercaseBtn = document.getElementById("lowercase");

uppercaseBtn.onclick = function() {
    circusText.textContent = circusText.textContent.toUpperCase();
};
lowercaseBtn.onclick = function() {
    circusText.textContent = circusText.textContent.toLowerCase();
};
// listener

// event -> click
// listener ->