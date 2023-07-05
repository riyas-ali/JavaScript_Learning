const textarea = document.querySelector('textarea');
const counter = document.querySelector('.counter');

function countingCharacter() {
    const text = textarea.value;
    const length = text.length;
    counter.innerHTML = length;
}
