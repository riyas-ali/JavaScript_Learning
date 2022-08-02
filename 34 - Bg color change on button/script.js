let body = document.getElementById('body');
let button = document.getElementsByTagName('button');
body.style.backgroundColor = 'tomato';

let colors = ['#1abc9c', '#2ecc71', '#3498db', '#9b59b6', '#34495e', '#f1c40f', '#e67e22', '#e74c3c', '#ecf0f1', '#95a5a6'];

function changeBg() {
    function randomBgColor() {
        colorIndex = Math.floor(Math.random() * 10);
        return colors[colorIndex];
    }
    currentColor = body.style.backgroundColor;
    randomColor = randomBgColor();
    while (randomColor == currentColor) {
        randomBgColor();
        randomColor = randomBgColor()
    } 
    body.style.backgroundColor = randomColor;
    // console.log(randomColor);
}