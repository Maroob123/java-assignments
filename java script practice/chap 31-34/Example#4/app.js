var rightnow = new Date();
rightnow = rightnow.toString();
var day = rightnow.slice(0, 3);
if (day === "sat" && "sun") {
    alert("Its Fun day");
} else {
    alert("Boring Normal days");
}