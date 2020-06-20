document.write("5. Write a program that shows the message “First fifteen days of the month” if the date is less than 16th of the month else shows “Last days of the month”.")
var rightnow = new Date();
rightnow = rightnow.toString();
var day = rightnow.slice(7, 10);
day = Number(day);
if (day <= 15) {
    alert("First fifteen Days Of the Month");
} else {
    alert("Last Days Of The Month");
}