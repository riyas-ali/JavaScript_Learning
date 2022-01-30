const cercle = document.querySelector('#cercle');

cercle.addEventListener('mouseenter' , () => {
    if(!cercle.classList.contains('hover')){
        cercle.classList.add('hover')
    }
})

cercle.addEventListener('mouseleave' , () => {
    if(cercle.classList.contains('hover')){
        cercle.classList.remove('hover')
    }
})