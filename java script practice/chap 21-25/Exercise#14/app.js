var shop = prompt("Welcome to ABC Backery What do You want to order\n sir \\ ma'am ?");
document.write("Write a program to enable “search by user input” in an array. After searching, prompt the user whether the given item is found in the list or not. Note: Perform case insensitive search. Whether the user enters cookie, Cookie, COOKIE or coOkIE, program should inform about its availability. ", "<br><br>")
shop = shop.toLowerCase()
var array = ["cake", "apple pie", "cookie", "chips", "patties"]
for (var i = 0; i < array.length; i++) {
    if (array[i] === shop) {
        document.write(array[i], " is <strong>avaliable</strong> at index ", i, " in our backery");
        break
    }
}
if (array.indexOf(shop) === -1) {
    document.write("We are sorry. ", shop, " is <strong>not avaliable</strong> in our backery");
}