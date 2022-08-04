countText = document.querySelector('.count-text');
buttons = document.querySelectorAll('button');
count = 0;

buttons.forEach(function(button) {
    button.addEventListener('click', function() {
        if (button.classList.contains('plus')) {
            count++;
        } else if (button.classList.contains('minus')) {
            count--;
        }
        countText.textContent = count;
        if (count > 0) {
            countText.style.color = 'green';
        } else if (count < 0) {
            countText.style.color = 'red';
        } else {
            countText.style.color = 'black';
        }
    })
});