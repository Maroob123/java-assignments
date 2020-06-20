document.write("5. Write a program that simulates a coin toss using random() method of JS Math class. Display the value of coin in your browser <br><br>")
var coin = Math.random() * 2;
var floor = Math.floor(coin)
if (floor === 0) {
    document.write(floor + 1, "<br>")
    document.write("Random Coin Value : Tails")
} else {
    document.write(floor + 1, "<br>")
    document.write("Random Coin Value : Heads")
}