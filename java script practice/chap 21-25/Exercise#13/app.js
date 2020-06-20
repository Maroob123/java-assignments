document.write("13. Write a program to take user input and store username in a variable. If the username contains any special symbol among [@ . , !], prompt the user to enter a valid username.");

function checkusername() {
    var uname = prompt("Enter username");
    for (var i = 0; i <= uname.length; i++) {
        if (uname[i] === '!') {
            alert("Please Enter a Valid Username");
            checkusername();
        }
        if (uname[i] === '@') {
            alert("Please Enter a Valid Username");
            checkusername();
        }
        if (uname[i] === ',') {
            alert("Please Enter a Valid Username");
            checkusername();
        }
        if (uname[i] === '.') {
            alert("Please Enter a Valid Username");
            checkusername();
        }
        if (uname[i] === ']') {
            alert("Please Enter a Valid Username");
            checkusername();
        }
        if (uname[i] === '') {
            alert("Please Enter a Valid Username");
            checkusername();
        }

    }
}