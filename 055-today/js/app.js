let date = new Date()
let day = date.getDay()
let today;
let quote;

switch (day) {
  case 0:
    today = "Sunday";
    quote = "Time to chillax!";
    break;
  case 1:
    today = "Monday";
    quote = "Monday morning blues!";
    break;
  case 2:
    today = "Tuesday";
    quote = "Taco Time!";
    break;
  case 3:
    today = "Wednesday";
    quote = "Two more days to the weekend.";
    break;
  case 4:
    today = "Thursday";
    quote = "The weekend is almost here...";
    break;
  case 5:
    today = "Friday";
    quote = "Weekend is here!";
    break;
  case 6:
    today = "Saturday";
    quote = "Time to party!";
    break;
}

let spanOfWeekday = document.getElementById("weekday");
spanOfWeekday.innerHTML = `${today}`;

let spanOfQuote = document.getElementById("quote");
spanOfQuote.innerHTML = `${quote}`;
