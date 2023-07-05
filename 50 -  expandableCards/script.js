const panels = document.querySelectorAll('.panel');
const body = document.body;

panels.forEach(panel => {
    panel.addEventListener('click', () => {
        removingActiveClass();
        panel.classList.add('active');
    })
})

function removingActiveClass() {
    panels.forEach(panel => {
        panel.classList.remove('active');
    })
}

function modeChanger() {
    body.classList.toggle('dark-mode')
}
