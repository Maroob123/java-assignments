document.write("15. Write a program to take password as an input from user. The password must qualify these requirements: \n a. It should contain alphabets and numbers \n b. It should not start with a number \n c. It must at least 6 characters long \n If the password does not meet above requirements, prompt the user to enter a valid password. For character codes of a-z, A-Z & 0-9, refer to ASCII table at the end of this document.");

function checkpassword() {
    var psw = prompt("Input to Create your Password");
    var array = ['1', '2', '3', '4', '5', '6', '7', '8', '9']
    for (var i = 0; i < array.length; i++) {
        if (psw[0] === array[i] && psw.length < 7) {
            alert("your password is successfully created");
            break
        } else {
            alert("please enter a valid password");
            checkpassword();
            break
        }

    }
}