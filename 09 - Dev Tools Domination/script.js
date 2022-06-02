const dogs = [{ name: 'Snickers', age: 2 }, { name: 'hugo', age: 8 }];

function makeGreen() {
  const p = document.querySelector('p');
  p.style.color = '#BADA55';
  p.style.fontSize = '50px';
}

// Regular
console.log('Hello');

// Interpolated
console.log('Hello I am i %s string!', 'nice');

let interpolation = "from flag";
console.log(`Hello I am ${interpolation}`);

// Styled
console.log('%c I am some great text', 'font-size:25px; background-color:#3498db');

// warning!
console.warn('Oh Noo');

// Error :|
console.error('Shit');

// Info
console.info('Crocodils eat 3-4 people per year');

// Testing
console.assert(1===1, 'Thats True');
console.assert(1===2, 'Thats Wrong');

const p = document.querySelector('p');

console.assert(p.classList.contains('ouch'), 'Note Include');

// clearing
console.clear()

// Viewing DOM Elements
console.log(p);
console.dir(p);

console.clear();

// Grouping together
dogs.forEach(dog => {
    console.group(`${dog.name}`);
    console.log(`This is ${dog.name}`);
    console.log(`${dog.name} is ${dog.age} years old`);
    console.log(`${dog.name} is ${dog.age * 7} dog years old`)
    console.groupEnd(`${dog.name}`)
})

// counting
console.count('name');
console.count('name');
console.count('place');
console.count('name');
console.count('place');
console.count('name');
console.count('place');
console.count('place');
console.count('name');

// timing
console.time(`fetching data`);
fetch(`https://api.github.com/users/wesbos`)
    .then(data => data.json())
    .then(data => {
        console.timeEnd(`fetching data`);
        console.log(data);
    })

//table
console.table(dogs);