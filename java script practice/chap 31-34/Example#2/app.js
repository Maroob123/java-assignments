var monthNames = ["Januraay", "Feburary", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
var now = new Date();
var theDay = now.getMonth();
var nameOfMonth = monthNames[theDay];
alert("Current Month :" + nameOfMonth);