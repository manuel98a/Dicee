var randomNumer1 = Math.floor(Math.random() * 6) + 1; // 1 - 6
var randomNumer2 = Math.floor(Math.random() * 6) + 1; // 1 - 6

var randomDiceImage1 = "dice" + randomNumer1 + ".png"; // dice#.png
var randomDiceImage2 = "dice" + randomNumer2 + ".png"; // dice#.png

var randomDicePath1 = "images/" + randomDiceImage1; // images/dice#.png
var randomDicePath2 = "images/" + randomDiceImage2; // images/dice#.png

var image1 = document.querySelectorAll("img")[0];
image1.setAttribute("src", randomDicePath1);

var image2 = document.querySelectorAll("img")[1];
image2.setAttribute("src", randomDicePath2);

if (randomNumer1 > randomNumer2) {
    document.querySelector("h1").innerHTML = "Player 1 WON!";
} else if (randomNumer1 < randomNumer2) {
    document.querySelector("h1").innerHTML = "Player 2 WON!";
} else {
    document.querySelector("h1").innerHTML = "Draw!";
}

function refreshPage(){
    window.location.reload();
}