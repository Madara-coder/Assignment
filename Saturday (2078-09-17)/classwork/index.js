var kaboom = function(index) {
    const elements = document.getElementsByTagName("li");
    const el = elements[index]; // elements [0]
    el.textContent = "The bomb exploded";
};