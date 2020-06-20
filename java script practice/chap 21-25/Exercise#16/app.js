document.write("16. Write a program to convert the following string to an array using string split method.var university = “University of Karachi”; Display the elements of array in your browser.<br><br><br> ");
var university = "University of Karachi";
for (var i = 0; i < university.length; i++) {
    var temp = university.slice(i, i + 1)
    document.write(temp, "<br>");
}