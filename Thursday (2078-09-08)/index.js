//To use setInterval() or syntax of the setInterval()
const time = setInterval(function() {
    const timeElement = document.getElementById("time");
    const currentTime = parseInt(timeElement.textContent);
    timeElement.textContent = currentTime - 1;

    // clearInterval(stop);
}, 1 * 1000); //where 1000 is 1 second also can be written as 1e3

//To use setTimeout() or syntax of hte setTimeout()
setTimeout(function() {
    const audio = document.getElementById("sound");
    audio.play();
    clearInterval(time); // used to close the interval time which is defined in variable time.
}, 5 * 1000); // where 5000 is 5 second