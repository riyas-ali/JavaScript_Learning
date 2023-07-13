var button = document.querySelector('.addToCart');
var cart = document.querySelector('.cartDiv');
counter = 1;

button.addEventListener('click', () => {
    var data = +cart.getAttribute('data-totalitems');
    newSum = data + counter;
    button.classList.add('sendtocart')
    setTimeout(() => {
        button.classList.remove('sendtocart')
    }, 1500);
    setTimeout(() => {
        cart.classList.add('shake');
        cart.setAttribute('data-totalitems', newSum);
    }, 1000);
    setTimeout(() => {
        cart.classList.remove('shake')
    }, 2000);
})
