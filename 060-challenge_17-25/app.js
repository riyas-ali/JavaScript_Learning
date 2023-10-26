// Coding challenge #17: Calculate the sum of digits of a positive integer number

function sumDigits(val) {
    let result = val.toString();
    let sum = 0;
    for (let element of result) {
        sum = sum + parseInt(element)
    }
    return sum;
}

console.log(sumDigits(1235231));

// Coding challenge #18: Print the first 100 prime numbers

function isPrimeNumber(num) {
    if(num <= 1) {
        return false;
    }
    if(num == 2) return true
    for(i = 2; i <= Math.sqrt(num); i++) {
        if(num % i == 0) {
            return false;
        }
    }
    return true
}

function printPrimes(count) {
    let n = 0;
    let num = 1;
    while(n <= count) {
        if(isPrimeNumber(num)) {
            console.log(`${n}: ${num}`);
            n++
        }
        num++
    }
}

printPrimes(100);

// Coding challenge #19: Create a function that will return in an array the first "nPrimes" prime numbers greater than a particular number "startAt"

function isPrime(val) {
    if(val < 2) return false;
    if(val == 2) return true;
    for(let i = 2; i <= Math.sqrt(val); i ++) {
        if(val % i === 0) return false;
    }
    return true;
}

function printPrimeNumbers(num, startAt) {
    let primeNumberCount = 0;
    let primeNumbersStarting = startAt;
    while(primeNumberCount < num) {
        if(isPrime(primeNumbersStarting)){
            console.log(primeNumbersStarting);
            primeNumberCount++;
        }
        primeNumbersStarting++;
    }
}

printPrimeNumbers(10, 100)

// Coding challenge #20: Rotate an array to the left 1 position

function rotateArrayToLeft(ar) {
    const firstElement = ar.shift();
    ar.push(firstElement);
    return ar
}

console.log(rotateArrayToLeft([1, 2, 3, 4, 5]));

// Coding challenge #21: Rotate an array to the right 1 position

function rotateArrayToRight(arr){
    const lastElement = arr.pop()
    arr.unshift(lastElement)
    return arr
}

console.log(rotateArrayToRight([1, 2, 3, 4, 5]))

// Coding challenge #22: Reverse an array

function reverseArray(arr) {
    let ar = []
    for(let element of arr) {
        ar.unshift(element)
    }
    return ar
}

console.log(reverseArray([1, 2, 3]))

function reverseArray1(value) {
    return value.reverse()
}

console.log(reverseArray1([1, 2, 3]))

// Coding challenge #23: Reverse a string

function reverseAString(value) {
    return value.split("").reverse().join("");
}

console.log(reverseAString('Javascript'));

// Coding challenge #24: Create a function that will merge two arrays and return the result as a new array

function joinArrays(arr1, arr2) {
    return [...arr1, ...arr2];
}

console.log(joinArrays([1, 2, 3, 4, 5], [6, 7, 8, 9, 0]));

// Coding challenge #25: Create a function that will receive two arrays of numbers as arguments and return an array composed of all the numbers that are either in the first array or second array but not in both

function mergeExclusive(ar1, ar2) {
    var mergedArr = [];
    for (var i=0;i<ar1.length;i++) {
        if (!ar2.includes(ar1[i])){
            if(!mergedArr.includes(ar1[i])) {
                mergedArr.push(ar1[i]);
            }
        }
    }
    for (var j=0;j<ar2.length;j++){
        if(!ar1.includes(ar2[j])){
            if(!mergedArr.includes(ar2[j])) {
                mergedArr.push(ar2[j]);
            }
        }
    }
    return mergedArr;
}

var ar1 = [1, 2, 3, 10, 5, 3, 14];
var ar2 = [1, 4, 5, 6, 14];

console.log(mergeExclusive(ar1, ar2));