document.write("<h1>8. Write a program to replace all occurrences of “and” in the string with “&” and display the result in your browser.</h1>", "<br><br>");
var message = "Ali and Sami are best friends. They play cricket and football together.";
document.write("<h2>String : </h2>", message, "<br><br>");
var new_message = message.replace(/and/g, "&");
document.write("<h2>After changing : </h2>", new_message);