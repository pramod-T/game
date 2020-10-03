const $submitButton = document.getElementById("submit");
const $message1 = document.getElementById("m");
const $lives = document.getElementById("lives");
const $l = document.getElementById("lives_text")

var guessnum = Math.round(Math.random() * 100) + 1;
var lives = 10;
var l;
var msg;
$submitButton.onclick = () => {
    var x = document.getElementById("myNumber").value;
    console.log(x);
    l = "Remaining Lives:";
    lives--;
    if (x == guessnum) {
        location.href = './win.html';
    } else if (lives == 0) {
        location.href = "./lose.html";
    } else if (x > guessnum) {
        msg = "clue:Oops! you guess is too high";
    } else if (x < guessnum) {
        msg = "clue:Oops! you guess is too low";
    }
    $l.style.dispaly = "inherit";
    $l.innerHTML = l;
    $lives.innerHTML = lives;
    $message1.style.display = "inherit";
    $message1.innerHTML = msg;
}