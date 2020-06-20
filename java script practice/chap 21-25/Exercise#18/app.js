document.write("18. You have a string “The quick brown fox jumps over the lazy dog”. Write a program to count number of occurrences of word “the” in given string.<br><br><br>")
var str = "The quick brown fox jumps over the lazy dog";
document.write("Text :", str, "<br><br>");
var temp = 0;
str = str.toLocaleLowerCase()
for (var i = 0; i < str.length; i++) {
    if (str[i] === 't' && str[i + 1] === 'h' && str[i + 2] == 'e') {
        temp++
    }
}
document.write("There are ", temp, " occurrence(s) of word 'the' ");