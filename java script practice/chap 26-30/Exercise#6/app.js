document.write("6. Write a program that shows a random number between 1 and 100 in your browser.<br><br>")
var ran = Math.random() * 100;
ran = Math.floor(ran);
document.write("Random Number between 1-100 :", ran + 1);