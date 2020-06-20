document.write("9. Create a date object of the starting date of this Ramadan and alert the number of days past since 1st Ramadan? Note: 1st Ramadan was on June 18, 2015 ");
var date1 = new Date("06/18/2015");
var date2 = new Date();

var difference = date2.getTime() - date1.getTime();
var days_diff = difference / (1000 * 3600 * 24);
days_diff = Math.floor(days_diff);
alert(days_diff + " days have passed since 1st Ramazan,2015");