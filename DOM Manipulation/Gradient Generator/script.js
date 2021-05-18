const colorSelector1 = document.getElementsByName("color1")[0];
const colorSelector2 = document.getElementsByName("color1")[1];
const randomSelector = document.getElementById("random");
const body = document.querySelector("body");

// colorSelector1.addEventListener("onchange", );

const changeColor = () => {
    const color1 = colorSelector1.value;
    const color2 = colorSelector2.value;
    const bg = "linear-gradient(to right, "+color1+", "+color2+")";
    body.style.background = bg;
}

const getColorNumber = () => {
    return Math.floor(Math.random()*256);
}

const generateRandomColor = () => {
    const r = getColorNumber(), g=getColorNumber(), b=getColorNumber();
    return rgbToHex(r, g, b);
}

const setRandomColor = () => {
    colorSelector1.value = generateRandomColor();
    colorSelector2.value = generateRandomColor();
    changeColor();
}

colorSelector1.addEventListener("input", changeColor);
colorSelector2.addEventListener("input", changeColor);
randomSelector.addEventListener("click", setRandomColor);