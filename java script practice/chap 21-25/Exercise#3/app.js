document.write("3. Write a program to find the index of letter 'n' in the word 'Pakistani' and display the result in your browser .", "<br><br>");
var Pak = "Pakistani";
document.write("String : ", Pak, "<br><br>");
for (var i = 0; i <= Pak.length; i++) {
    if (Pak[i] === "n") {
        document.write("Index of 'n' is :", i);
        break;
    }
}