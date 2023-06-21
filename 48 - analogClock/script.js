hr = document.getElementById('hr');
min = document.getElementById('min')
sec = document.getElementById('sec')

setInterval(() => {
    let day = new Date()
    let hh = day.getHours() * 30
    let mm = day.getMinutes() * 6
    let ss = day.getSeconds() * 6
    
    hr.style.transform = `rotateZ(${hh}deg)`
    min.style.transform = `rotateZ(${mm}deg)`
    sec.style.transform = `rotateZ(${ss}deg)`
}, 1000);