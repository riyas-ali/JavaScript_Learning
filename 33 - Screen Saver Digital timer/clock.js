let hour = document.getElementById('hours');
let minutes = document.getElementById('minutes');
let ampm = document.getElementById('ampm');
let seconds = document.getElementById('seconds');

updateTime = (date) => {
    time = new Date();
    // console.log(time.getHours());
    // console.log(time.getMinutes());
    var hours = time.getHours();
    hours = hours % 12;
    hours = hours ? hours : 12;
    hour.innerHTML = hours < 10 ? '0' + hours : hours;
    minutes.innerHTML = time.getMinutes() < 10 ? '0' + time.getMinutes() : time.getMinutes();
    ampm.innerHTML = time.getHours() >= 12 ? 'PM' : 'AM';
    seconds.innerHTML = time.getSeconds() < 10 ? '0' + time.getSeconds() : time.getSeconds();
}
setInterval(updateTime, 1000);

