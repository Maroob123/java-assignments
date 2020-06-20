document.write("4. Write a program to find the last index of letter “l” in the word 'Hello World' and display the result in your browser.", "<br><br>");
var hi = "Hello World";
var index = -1;
document.write("String : ", hi, "<br><br>");
for (var i = hi.length; i >= 0; i--) {
    if (hi[i] === "l") {
        document.write("Index of 'l' is :", i);
        break
    }
}