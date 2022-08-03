input = document.querySelector('.form-control');
button = document.querySelector('.btn');
display = document.querySelector('h5');

button.addEventListener('click', () => {
    // console.log(input.value);
    inputText = input.value;
    display.innerHTML = inputText;
})