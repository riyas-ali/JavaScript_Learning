// Coding challenge #26: Create a function that will receive two arrays and will return an array with elements that are in the first array but not in the second

function mergeLeft(ar1, ar2) {
    let merged = [];
    for (let element of ar1) {
        if (!ar2.includes(element)) {
            merged.push(element);
        }
    }
    return merged;
}

var ar1 = [1, 2, 3, 10, 5, 3, 14];
var ar2 = [-1, 4, 5, 6, 14];

console.log(mergeLeft(ar1, ar2));

// Coding challenge #27: Create a function that will receive an array of numbers as argument and will return a new array with distinct elements

function getDistinctElements(ar) {
    const distinctAr = Array.from(new Set(ar));
    return distinctAr;
}

console.log(getDistinctElements([1, 2, 3, 6, -1, 2, 9, 7, 10, -1, 100]));

// Coding challenge #28: Calculate the sum of first 100 prime numbers

function isPrimeNumber(num) {
  for (let i = 2; i < num; i++) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
}

function calculateSumOfFirstNPrimes(n) {
  let primesCounted = 0;
  let currentNum = 2;
  let sum = 0;
  while (primesCounted < n) {
    if (isPrimeNumber(currentNum)) {
      sum += currentNum;
      primesCounted++;
      console.log(currentNum);
    }
    currentNum++;
  }
  return sum;
}

console.log(calculateSumOfFirstNPrimes(100));

// Coding challenge #29: Print the distance between the first 100 prime numbers

function findPrimeNumbers(num) {
    for ( let i = 2; i < num; i ++ ) {
        if ( num % i == 0 ) {
            return false;
        }
    }
    return true
}

function distanceBetweenPrimeNumbers(n) {
    primeCounted = 0;
    currentNum = 2;
    previousPrime = 1;
    while ( primeCounted < n ) {
        if (findPrimeNumbers(currentNum)) {
            console.log(previousPrime + " - " + currentNum + " = " + (currentNum - previousPrime));
            previousPrime = currentNum;
            primeCounted ++
        }
        currentNum ++
    }
}

distanceBetweenPrimeNumbers(100)

// Coding challenge #30. Create a function that will return the number of words in a text

function wordsCount(sentence) {
    const separators = [" ", "\t", "\n", "\r", ",", ";", ".", "!", "?"];
    const wordArray = sentence.split(new RegExp("[" + separators.join("") + "]+"));
    const words = wordArray.filter(word => word.length > 0);
    return words.length;
}

console.log("Word count:", wordsCount("Hello, how are you?"));

// Coding challenge #31. Create a function that will capitalize the first letter of each word in a text

function capitalize(sentence) {
  const separators = [" ", "\t", "\n", "\r", ",", ";", ".", "!", "?"];
  const wordArray = sentence.split(
    new RegExp("[" + separators.join("") + "]+")
  );
  const words = wordArray.map((word) => {
    return word[0].toUpperCase() + word.slice(1).toLowerCase();
  });
  return words.join(" ");
}

console.log(capitalize("Create a function that will capitalize the first letter of each word in a text"));

// Coding challenge #32. Calculate the sum of numbers received in a comma delimited string

function sumCSV(value) {
    let arrayValues = value.split(",");
    let totalSum = 0;
    for (let i=0; i<arrayValues.length;i++) {
        totalSum += parseInt(arrayValues[i]);
    }
    return totalSum
}

console.log(sumCSV("1.5, 2.3, 3.1, 4, 5.5, 6, 7, 8, 9, 10.9"));

// Coding challenge #33. Create a function that will return an array with words inside a text

function getWordsFromText(text){
  const separators = [" ", "\t", "\n", "\r", ",", ";", ".", "!", "?"];
  const wordArray = text.split(new RegExp("[" + separators.join(" ") + "]"));
  const words = wordArray.filter(word => word.length > 0);
  return words;
}

console.log(getWordsFromText("Create a function, that will return an array (of string), with the words inside the text"));

// Coding challenge #34. Create a function to convert a CSV text to a “bi-dimensional” array

function csvToText(text) {
    var lines = text.trim().split("\n");
    for(let i = 0; i < lines.length; i++) {
        word = lines[i].trim().split(";")
        lines[i] = word
    }
    return JSON.stringify(lines)
}

console.log(csvToText("John;Smith;954-000-0000\nMich;Tiger;305-000-0000\nMonique;Vasquez;103-000-0000"));

// Coding challenge #35. Create a function that converts a string to an array of characters

function getChars(text) {
    array = Array.from(text);
    array = array.filter(word => word.trim() !== "")
    return array
}

console.log(getChars("I like Javascript"));
