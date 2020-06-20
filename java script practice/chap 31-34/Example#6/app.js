
document.write("6. Write a program that determines the minutes since midnight, Jan. 1, 1970 and assigns it to a variable that hasn't been declared beforehand. Use any variable you like to represent the Date object.<br><br><br>")
var rightnow = new Date();
document.write("Current Date :", rightnow, "<br><br>")
var millsSince = rightnow.getTime();
document.write("Elapsed milliseconds since janurary 1,1970: ", millsSince, "<br><br>");
document.write("Elapsed minutes since janurary 1,1970: ", millsSince / 3600, "<br><br>");