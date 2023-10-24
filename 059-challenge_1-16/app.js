// Coding challenge #1: Print numbers from 1 to 10

for(let i = 1; i < 11; i++) {
    console.log(i);
}

// Coding challenge #2: Print the odd numbers less than 100

for (let i = 1; i <= 99; i++) {
    if (!(i % 2 == 0)) {
        console.log(i);
    }
}

// Coding challenge #3: Print the multiplication table with 7

for(let i = 1; i <= 10; i ++) {
    console.log(`${i} * 7 = ${i *  7}`);
}

// Coding challenge #4: Print all the multiplication tables with numbers from 1 to 10

function multiplication(n) {
    for(let i = 1; i <= 10; i ++) {
        console.log(`${i} * ${n} = ${i *  n}`);
    }
}

for(i = 1; i <= 10; i ++) {
    multiplication(i);
    console.log('--------');
}

// Coding challenge #5: Calculate the sum of numbers from 1 to 10

let totalSum = 0;
for(let i = 1; i <= 10; i++){
    totalSum += i;
}
console.log(totalSum);

// Coding challenge #6: Calculate 10!

let total = 1;

for(let i = 1; i <= 10; i++){
    total *= i;
}

console.log(total);

// Coding challenge #7: Calculate the sum of odd numbers greater than 10 and less than 30

let totalOdds = 0;

for(let i = 11; i <= 29; i++){
    if(!(i%2==0)){
        totalOdds+=i;
    }
}

console.log(totalOdds);

// Coding challenge #8: Create a function that will convert from Celsius to Fahrenheit

function celsiusToFahrenheit(val) {
  return `${(val * 9) / 5 + 32} °F`;
}

console.log(celsiusToFahrenheit(37));

// Coding challenge #9: Create a function that will convert from Fahrenheit to Celsius

function fahrenheitToCelsius(val) {
  return `${((val - 32) * 5) / 9} °C`;
}

console.log(fahrenheitToCelsius(98.6));

// Coding challenge #10: Calculate the sum of numbers in an array of numbers

function sumArr(array) {
    let totalSum = 0;
    for (const num of array){
        totalSum += num;
    }
    return totalSum;
}

arr = [1 , 2, 3, 4, 5, 6, 7, 8, 9, 10]

console.log(sumArr(arr))

// Coding challenge #11: Calculate the average of the numbers in an array of numbers

let ar = [1, 3, 9, 15, 90];

function avgArray(ar) {
  const sum = ar.reduce((a, b) => a + b, 0);
  const avg = sum / ar.length;
  return avg;
}

console.log(avgArray(ar));

// Coding challenge #12: Create a function that receives an array of numbers and returns an array containing only the positive numbers

// solution 1

let maxArray = [-5, 10, -3, 12, -9, 5, 90, 0, 1];

function positiveNumbers(arr) {
    let positiveNumbers = [];
    for (let i=0; i<arr.length;i++){
        if (arr[i] > 0){
            positiveNumbers.push(arr[i]);
        }
    }
    return positiveNumbers;
}

console.log(positiveNumbers(maxArrayr));

// solution 2

function positive(arr) {
    return arr.filter(num => num > 0);
}
console.log(positive(ar))

// Coding challenge #13: Find the maximum number in an array of numbers

function findMax(ar) {
    let max = 0
    for(let i = 0; i < ar.length; i ++) {
        if (ar[i] > max) {
            max = ar[i]
        }
    }
    return max
}

console.log(findMax(maxArray));

// Coding challenge #14: Print the first 10 Fibonacci numbers without recursion

function fibonacci() { 
    let a = 0, b = 1, nextTerm;
    for (let i = 0; i <= 10; i++) {
        console.log(a);
        nextTerm = a + b;
        [a, b] = [b, nextTerm];
    }
}
fibonacci();

// Coding challenge #15: Create a function that will find the nth Fibonacci number using recursion

function findFibonacci(val) {
    if(val == 0) {
        return 0;
    }
    if(val == 1) {
        return 1;
    }
    return findFibonacci(val-1) + findFibonacci(val-2);
}

let result = findFibonacci(10)
console.log(result); 

// Coding challenge #16: Create a function that will return a Boolean specifying if a number is prime

function findPrimeNumber(val) {
    if (val <= 1){
        return false;
    } else{
        for(let i=2; i<val; i++){
            if(val % i=== 0){
                return false;
            }
        }
        return true;
    }
}

console.log(findPrimeNumber(11));

