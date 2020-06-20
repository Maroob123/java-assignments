document.write("12. Write a program that creates a date object and show the date in an alert box that is reset to 100 years back?<br><br>");
var now = new Date();
var current = new Date();
var earlier = current.getFullYear();
earlier = earlier - 100;
current.setFullYear(earlier);
alert("Current Date : " + now + " \n\n" + "100 years Ago it was : " + current)