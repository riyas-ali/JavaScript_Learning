body = document.querySelector('body');
hexText = document.getElementById('color');
copyText = document.getElementById('copy');
button = document.querySelector('button');
hexValues = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F'];
copyText.style.display = 'none';

button.addEventListener('click', () => {
    copyText.style.display = 'inline-block';
    let hex = '#'
    
    for (i = 0; i < 6; i++) {
        const index = Math.floor(Math.random() * hexValues.length);
        hex += hexValues[index];
        // console.log(hex);
    }

    hexText.innerHTML = hex;
    body.style.backgroundColor = hex;

    copyText.addEventListener('click', () => {
        // console.log(hexText.innerHTML);
       navigator.clipboard.writeText(hexText.innerHTML);
    })
})