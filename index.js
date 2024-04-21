function updateDateTime() {
  var now = new Date();
  var date = now.toDateString();
  var hours = now.getHours();
  var minutes = now.getMinutes();
  var seconds = now.getSeconds();

  minutes = (minutes < 10 ? "0" : "") + minutes;
  seconds = (seconds < 10 ? "0" : "") + seconds;
  var time = hours + ":" + minutes + ":" + seconds;
  document.getElementById("datetime").innerHTML =
    "Current Date: " + date + "<br>Current Time: " + time;

  setTimeout(updateDateTime, 1000);
}

updateDateTime();
