const $submitButton = document.getElementById("submit");
const $message1 = document.getElementById("message");
const $lives = document.getElementById("lives");

var guessnum = Math.round(Math.random() * 100);
var lives = 10;
var msg;

$submitButton.onclick = () => {

    let userInput = document.getElementById("number-input").Value;
    lives--;
    if (userInput == guessnum) {
        location.href = './win.html';
    } else if (lives == 0) {
        location.href = "./lose.html";
    } else if (userInput > guessnum) {
        msg = "Oops! you guess is too high";
    } else if (userInput < guessnum) {
        msg = "Oops! you guess is too low";
    }
    $message1.style.display = "inherit";
    $message1.innerHTML = message;
    $lives.innerHTML = lives;
}