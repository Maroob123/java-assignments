document.write("17. Write a program to display the last character of a userinput.<br><br><br>")
var Pak = prompt("Enter any word");
document.write("User Input: ", Pak, "<br><br>");
var last = Pak.slice(Pak.length - 1, Pak.length);
document.write("Last Character Of Input: ", last);