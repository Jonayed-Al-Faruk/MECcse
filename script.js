
//  This section is time day and Date ?

const showTime = document.querySelector("#date-time");
const showDate = document.querySelector("#date-date");
const showdayDate = document.querySelector("#day-date")
const noofday = ["Sunday", "Monday", "tuesday", "Wednesday", "Thrusday", "Friday", "Saturday"];

function printTime() {
    var date = new Date();
    var hour = date.getHours();
    var min = date.getMinutes();
    var sec = date.getSeconds();
    var period = "AM";
    if (hour == 0) {
        hour = 12;
    }
    if (hour > 12) {
        hour = hour - 12;
        period = "PM"
    }
    if (hour < 10) {
        hour = "0" + hour;
    }
    if (min < 10) {
        min = "0" + min;
    }
    if (sec < 10) {
        sec = "0" + sec;
    }
    var time = hour;
    showdayDate.innerHTML = noofday[date.getDay()];
    showTime.innerHTML = hour + " : " + min + " : " + sec + " " + period;
    showDate.innerHTML = date.getDate() + "/" + (date.getMonth()+1) + "/" + date.getFullYear();
}
setInterval(() => {
    printTime()
}, 1000);