var colorSelector1 = document.getElementsByName("color1")[0];
var colorSelector2 = document.getElementsByName("color1")[1];
var body = document.querySelector("body");

// colorSelector1.addEventListener("onchange", );

function change_color(){
    var color1 = colorSelector1.value;
    var color2 = colorSelector2.value;
    var bg = "linear-gradient(to right, "+color1+", "+color2+")";
    body.style.background = bg;
}