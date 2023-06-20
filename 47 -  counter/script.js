(function incrementAndDecrement() {
    buttons = document.querySelectorAll('.btn')
    counter = document.getElementById('counter')
    let count = 0
    counter.innerHTML = count
    buttons.forEach(button => {
        button.addEventListener('click', () => {
            if(button.id == 'increment') {
                count++;
                counter.innerHTML = count
            } else {
                count--
                counter.innerHTML = count
            }
            if(count < 0) {
                counter.style.color = 'red'
            } else if (count > 0) {
                counter.style.color = 'green'
            } else {
                counter.style.color = 'black'
            }
        })
    })
})()