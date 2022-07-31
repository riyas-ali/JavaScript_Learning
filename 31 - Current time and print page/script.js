date = document.getElementById('demo');
greeting = document.querySelector('.greeting');
let x, y, z;
x = 5;
y = 6;
z = x + y;
const cars = ['maruti', 'volvo', 'bmw'];
// cars[0] = 'toyota';
cars.push('Audi')
console.log(cars);

document.querySelector('.statement').innerHTML = "The value of z is " + z + ".";

greeting.innerHTML = "Hello JavaScript";
// greeting = document.write("Hello JavaScript");
// greeting = window.alert("Hello JavaScript");
// greeting = alert("Hello JavaScript");
greeting.style.fontSize = "22px";
greeting.style.display = "none";

function getTime() {
    // date.innerHTML = Date();
    date.textContent = Date();
    greeting.style.display = "block";
}

function printPage() {
    window.print()
}