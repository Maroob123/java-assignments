document.write("8. Write a program that creates a Date object for the last day of the last month of 2020 and assigns it to variable named laterDate.");
var now = new Date();
now.setMonth(11);
now.setDate(31);
now.setHours(00);
now.setMinutes(00);
now.setSeconds(00);
alert(now);