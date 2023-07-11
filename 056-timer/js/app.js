const endDate = document.querySelector("input[name='endDate']");
const clock = document.querySelector(".clock");
let timeStop = true;
let timeIntervel;

const savedValue = new Date(localStorage.getItem("countdown")) || false;
if (savedValue) {
  startClock(savedValue);
  let inputValue = new Date(savedValue);
  endDate.valueAsDate = inputValue;
}

endDate.addEventListener("change", function (e) {
  e.preventDefault();
  clearInterval(timeIntervel);
  const eventDate = new Date(endDate.value);
  localStorage.setItem("countdown", eventDate);
  startClock(eventDate);
  timeStop = true;
});

function startClock(eventDate) {
  updateCounter(eventDate);
  if (timeStop) {
    timeIntervel = setInterval(() => {
      updateCounter(eventDate);
    }, 1000);
  } else {
    clearInterval(timeIntervel);
  }
}

function updateCounter(eventDate) {
  const timeDifference = timeDiffrence(eventDate);
  if (timeDifference.total <= 0) {
    timeStop = false;
  }
  for (let property in timeDifference) {
    let el = clock.querySelector("." + property);
    if (el) {
      el.innerHTML = timeDifference[property];
    }
  }
}

function timeDiffrence(eventDate) {
  const now = new Date();
  const timeDiff = eventDate - now;
  const days = Math.floor(timeDiff / (1000 * 60 * 60 * 24));
  const hours = Math.floor(
    (timeDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  const minutes = Math.floor((timeDiff % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((timeDiff % (1000 * 60)) / 1000);
  return {
    total: timeDiff,
    days: days,
    hours: hours,
    minutes: minutes,
    seconds: seconds,
  };
}
