document.write("11. Create a Date object for the current date and time. Extract the hours, reset the date object an hour ahead and finally display the date object in your browser.<br><br>");
var current = new Date();
var earlier = current.getHours();
earlier = earlier - 1;
document.write("Current Date : ", current, " <br><br>");
current.setHours(earlier);
document.write("1 Hour Ago it was : ", current, " <br><br>");