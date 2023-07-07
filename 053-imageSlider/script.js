const buttons = document.querySelectorAll('.button');
const container = document.getElementById('container');
count = 0
buttons.forEach(element => {
    element.addEventListener('click', () => {
        if (element.classList.contains('fa-caret-square-o-left')){
            count -= 1
            if (count < 0) {
                count = 4;
            }
            container.style.backgroundImage = `url('images/image-${count}.jpg')`;
        } else if (element.classList.contains('fa-caret-square-o-right')) {
            count += 1
            if (count > 4) {
                count = 0;
            }
            container.style.backgroundImage = `url('images/image-${count}.jpg')`;
        }
    })
});
