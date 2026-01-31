const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
const weekdays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

function updateClock() {
    let now = new Date();

    // Time (12-hour with AM/PM)
    let hours = now.getHours() % 12 || 12; // 12 instead of 0
    let minutes = now.getMinutes();
    let seconds = now.getSeconds();
    let ampm = now.getHours() >= 12 ? 'PM' : 'AM';

    hours = hours < 10 ? "0" + hours : hours;
    minutes = minutes < 10 ? "0" + minutes : minutes;
    seconds = seconds < 10 ? "0" + seconds : seconds;

    document.querySelector('.hours').textContent = hours;
    document.querySelector('.minutes').textContent = minutes;
    document.querySelector('.seconds').textContent = seconds;
    document.querySelector('.ampm').textContent = ampm;

    // Date
    let weekday = weekdays[now.getDay()];
    let day = now.getDate();
    let month = months[now.getMonth()];
    let year = now.getFullYear();

    document.querySelector('.weekday').textContent = weekday;
    document.querySelector('.day').textContent = day;
    document.querySelector('.month').textContent = month;
    document.querySelector('.year').textContent = year;
}

updateClock();
setInterval(updateClock, 1000);
