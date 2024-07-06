let lightcontainerEl = document.getElementById("lightcontainer");
let redlightEl = document.getElementById("redlight");
let greenlightEl = document.getElementById("greenlight");
let yellolightEl = document.getElementById("yellolight");


lightcontainerEl.style.backgroundColor = "skyblue";
lightcontainerEl.style.height = "100px";
lightcontainerEl.style.margin = "25px";
lightcontainerEl.style.border = "2px solid #000000";
lightcontainerEl.style.borderRadius = "20px";
lightcontainerEl.style.width = "300px";

redlightEl.style.backgroundColor = "#000000";
redlightEl.style.height = "40px";
redlightEl.style.margin = "25px";
redlightEl.style.border = "2px solid #000000";
redlightEl.style.borderRadius = "30px";
redlightEl.style.width = "40px";

greenlightEl.style.backgroundColor = "#0AFB70";
greenlightEl.style.height = "40px";
greenlightEl.style.margin = "25px";
greenlightEl.style.border = "2px solid #000000";
greenlightEl.style.borderRadius = "30px";
greenlightEl.style.width = "40px";


yellolightEl.style.backgroundColor = "#000000";
yellolightEl.style.height = "40px";
yellolightEl.style.margin = "25px";
yellolightEl.style.border = "2px solid #000000";
yellolightEl.style.borderRadius = "30px";
yellolightEl.style.width = "40px";

let labelgreenEl = document.getElementById("labelgreen");
let labelredEl = document.getElementById("labelred");
let labelyellowEl = document.getElementById("labelyellow");

let counter = 0;


function yellowOn() {
    yellolightEl.style.backgroundColor = "yellow";
}

function redOn() {
    counter = 10;
    redlightEl.style.backgroundColor = "red";
    yellolightEl.style.backgroundColor = "#000000";
    let uniquered = setInterval(function() {
        counter = counter - 1;
        labelredEl.textContent = counter;
        if (counter === 0) {
            clearInterval(uniquered);
            labelredEl.textContent = "";
            redlightEl.style.backgroundColor = "#000000";
            console.log(counter);
            greenOn();

        }
        if (counter <= 3) {
            yellowOn();
        }

    }, 1000);
}

function greenOn() {
    counter = 10;
    yellolightEl.style.backgroundColor = "#000000";
    let uniqueId = setInterval(function() {
        counter = counter - 1;
        greenlightEl.style.backgroundColor = "#0AFB70";
        labelgreenEl.textContent = counter;
        if (counter === 0) {
            clearInterval(uniqueId);
            labelgreenEl.textContent = "";
            greenlightEl.style.backgroundColor = "#000000";
            console.log(counter);
            redOn();
        }
        if (counter <= 3) {
            yellowOn();
        }
    }, 1000);


}
greenOn();