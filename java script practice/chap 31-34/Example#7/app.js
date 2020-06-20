document.write("7. Write a program that tests whether it's before noon and alert “Its AM” else “its PM”.")

var rightnow = new Date();
rightnow = rightnow.toString();
var time = rightnow.slice(15, 18);
time = Number(time);
if (time < 12) {
    alert("Its A.M");
} else {
    alert("Its P.M");
}