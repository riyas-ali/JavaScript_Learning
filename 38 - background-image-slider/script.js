buttons = document.querySelectorAll('button');
slider = document.querySelector('.container');
counter = 0;
pictures = ["contBcg-0","contBcg-1","contBcg-2","contBcg-3","contBcg-4",]

slider.style.backgroundImage = `url('./img/${pictures[counter]}.jpeg')`
buttons.forEach(button => {
    button.addEventListener('click', () => {
        if (button.classList.contains('btn-next')) {
            counter++;
            if (counter > pictures.length -1) {
                counter = 0;
            }
            slider.style.backgroundImage = `url('./img/${pictures[counter]}.jpeg')`
        } else if (button.classList.contains('btn-back')) {
            counter--;
            if (counter < 0) {
                counter = pictures.length -1;
            }
            slider.style.backgroundImage = `url('./img/${pictures[counter]}.jpeg')`
        } 
    })
});