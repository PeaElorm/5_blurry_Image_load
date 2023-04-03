const loadText = document.querySelector(".loading");
const backgroundImage = document.querySelector(".Bg-Image");

let load = 0;

let myInterval = setInterval(blurring, 30)

function blurring() {
    load++
    if (load > 99) {
        clearInterval(myInterval)
    }
    
    loadText.innerHTML = `${load}%`
    loadText.style.opacity = scale(load, 0, 100, 1, 0);
    backgroundImage.style.filter = `blur(${scale(load,0,100,30,0)}px)`;
    
}

//stackoverflow solution to mapping the percentage laod to the opacity
// https://stackoverflow.com/questions/10756313/javascript-jquery-map-a-range-of-numbers-to-another-range-of-numbers
function scale(number, inMin, inMax, outMin, outMax) {
  return ((number - inMin) * (outMax - outMin)) / (inMax - inMin) + outMin;
}