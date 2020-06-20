document.write("<h1>10. Write a program that takes user input. Convert and show the input in capital letters.</h1>", "<br><br>");
var sentance = prompt("Enter any word");
document.write("User Input : ", sentance, "<br>");
document.write("Title case : ");

function titleCase(string) {
    var sentence = string.toLowerCase().split(" ");
    for (var i = 0; i < sentence.length; i++) {
        sentence[i] = sentence[i][0].toUpperCase() + sentence[i].slice(1);
    }
    document.write(sentence.join(" "));
    return sentence;
}
titleCase(sentance);