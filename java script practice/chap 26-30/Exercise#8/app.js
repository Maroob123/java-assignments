document.write("8. Write a program that stores a random secret number from 1 to 10 in a variable. Ask the user to input a number between 1 and 10. If the user input equals the secret number, congratulate the user.");

function game() {
    var pos = Math.random() * 10;
    pos = Math.floor(pos + 1)
    var user = prompt("Guess any number between 1 to 10");
    user = Number(user)
    if (user === pos) {
        alert("Congrates You have found that number");
    } else {
        alert("try again");
        game();
    }
}