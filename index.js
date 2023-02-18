


var Joseph  = Math.floor(Math.random() * 6) + 1;

var randomDiceImage = "dice" + Joseph + ".png";

var randomImageSource = "images/" + randomDiceImage;

var image1 = document.querySelectorAll("img")[0];
image1.setAttribute("src", randomImageSource);

var Samuel = Math.floor(Math.random() * 6) + 1;

var randomImageSource2 = "images/dice" + Samuel + ".png";

document.querySelectorAll("img")[1].setAttribute("src", randomImageSource2);

// If Player 1 Wins

if (Joseph > Samuel) {
    document.querySelector("h1").innerHTML = "Joseph Wins🚩";
} else if (Samuel > Joseph) {
    document.querySelector("h1").innerHTML = "Samuel Wins🚩";
}else {
    document.querySelector("h1").innerHTML = "Draw!";
}