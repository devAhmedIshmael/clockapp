var today = new Date();
var hours = today.getHours();
var minutes = today.getMinutes();
var seconds = today.getSeconds();
var shift = `AM`;

if (hours < 10) {
  hours = `0${hours}`;
} else if (hours > 12) {
  shift = `PM`;
  hours = `0${hours - 12}`;
}
if (minutes < 10) {
  minutes = `0${minutes}`;
}
if (seconds < 10) {
  seconds = `0${seconds}`;
}

var time = document.getElementById(`clock`);
time.innerHTML = `<p>TIME NOW IS: ${hours} : ${minutes} : ${seconds} ${shift}</p>`;
