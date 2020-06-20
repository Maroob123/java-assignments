var age = prompt("Enter Your age");
age = Number(age);
var now = new Date();
var year = now.getFullYear();
year = year - age;
alert("Your Age is " + age + "\n" + "Your Birth Year is " + year + "\n");