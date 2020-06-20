var date = new Date("12/05/2015 22:50:16");
var date1 = new Date();
var diff = date1.getTime() - date.getTime();
var seconds = diff / 1000;
seconds = Math.floor(seconds);
alert("On reference date " + date + seconds + " seconds had passed since beginning 2015");