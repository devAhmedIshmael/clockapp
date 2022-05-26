var today = new Date();
var hours = today.getHours();
var minutes = today.getMinutes();
var seconds = today.getSeconds();
var shift = `AM`;

if (hours < 10) {
  hours = `0${hours}`;
} else if (hours > 12) {
  shift = `PM`;
}
if (minutes < 10) {
  minutes = `0${minutes}`;
}
if (seconds < 10) {
  seconds = `0${seconds}`;
}

document.write(
  `<h1 style="margin-top: 20%;color: #0ed2de; text-align: center; font-size: 80px"> TIME NOW IS: ${hours} : ${minutes} : ${seconds} ${shift} </h1>`
);
