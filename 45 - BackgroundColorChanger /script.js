function changeColor() {
    const body = document.querySelector("body");
    const colorText = document.querySelector("#current-color");

    var alphabet = ['a', 'b', 'c', 'd', 'e', 'f', '0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
    
    var items = [];

    for (i=0; i < 6; i++) {
        const randomIndex = Math.floor(Math.random() * alphabet.length);
        const randomItem = alphabet[randomIndex];
        items.push(randomItem);
    }

    color = `#${items.join('')}`;
    body.style.backgroundColor = color;
    colorText.textContent = color;
}