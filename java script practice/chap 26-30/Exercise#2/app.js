document.write("1. Write a program that takes a negative float poin number from user & display the following in your browser. \n a. number \n b. round off value of the number \n c. floor value of the number \n d. ceil value of the number <br><br>")
var user = prompt("Enter Any Positive Number");
user = Number(user);
document.write("Number :", user, "<br>")
document.write("Round Off Value :", Math.round(user), "<br>")
document.write("floor Value :", Math.floor(user), "<br>")
document.write("ceil Value :", Math.ceil(user), "<br>")