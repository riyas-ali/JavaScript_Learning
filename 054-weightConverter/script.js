const form = document.getElementById('form');
const input = document.getElementById('weight');
const output = document.getElementById('pounds');

form.addEventListener('submit', (e) => {
    e.preventDefault();
    const weight = input.value;
    if(isNaN(weight) || weight <= 0) {
        if(output.classList.contains('text-success')) {
            output.classList.remove('text-success')
        }
        output.classList.add('text-danger')
        output.innerHTML = 'Invalid input'
    } else {
        const pounds = weight * 2.20462;
        if(output.classList.contains('text-danger')) {
            output.classList.remove('text-danger')
        }
        output.classList.add('text-success')
        output.innerHTML = pounds.toString().slice(0, pounds.toString().indexOf(".") + 3);
    }
})
