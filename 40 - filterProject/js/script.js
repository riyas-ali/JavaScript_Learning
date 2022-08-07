//button filter
buttons = document.querySelectorAll('.btn');
storeItem = document.querySelectorAll('.store-item');

buttons.forEach(button => {
    button.addEventListener('click', (e) => {
        e.preventDefault();

        filter = e.target.dataset.filter

        storeItem.forEach(item => {
            if (filter === 'all') {
                item.style.display = 'block';
            } else {
                if (item.classList.contains(filter)) {
                    item.style.display = 'block';
                } else {
                    item.style.display = 'none';
                }
            }
        })
    })
});

//search filter
 searchBox = document.querySelector('#search-item');
 searchBox.addEventListener('keyup', (e) => {
    searchFilter = e.target.value.toLowerCase().trim();

    storeItem.forEach(item => {
        if (item.textContent.includes(searchFilter)) {
            item.style.display = 'block';
        } else {
            item.style.display = 'none';
        }
    })
 })