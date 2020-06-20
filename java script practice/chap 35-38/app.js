function tellTime() {
    var now = new Date()
    alert(now);
}

function fullname() {
    var first_name = prompt("Enter your first name");
    var second_name = prompt("Enter Your second Name");
    alert("Assalm-o-Alikum " + first_name + " " + second_name);
}

function Sum() {
    var first_no = Number(prompt("Enter First Number"));
    var second_no = Number(prompt("Enter Second Number"));
    var sum = first_no + second_no;
    alert("Sum of input numbers are " + sum)
}

function simplecalculator(one, two, op) {
    if (op === "+") {
        document.getElementById("demo").innerHTML = one + two;
    } else if (op === "-") {
        document.getElementById("demo").innerHTML = one - two;
    } else if (op === "*") {
        document.getElementById("demo").innerHTML = one * two;
    } else if (op === "/") {
        if (two != "null" && 0) {
            document.getElementById("demo").innerHTML = one / two;
        } else {
            alert("cannot be divided by zero");
        }
    } else {
        alert("Please Enter Appropriate operator");
    }
}

function square(a) {
    document.getElementById("dem").innerHTML = a * a;
}

// function factorial(num) {
//     var fact = 1;
//     for (var i = 1; i <= num; i++) {
//         fact *= i;
//     }
//     document.getElementById("fact").innerHTML = fact;

// }
function factorial() {
    var i, no, fact = 1;
    no = Number(document.getElementById("num").value);
    for (i = 1; i <= no; i++) {
        fact *= i;
    }
    document.getElementById("answer").value = fact;
}

function counting() {
    var i, st, en, answer = 1;
    st = Number(document.getElementById("start").value);
    en = Number(document.getElementById("end").value);
    for (i = st; i <= en; i++) {
        console.log(i);
    }
}

function hypotenuse(base, perp) {
    function double(b) {
        return b * b;
    }
    base = double(base);
    perp = double(perp);
    var hype = Math.sqrt(base + perp);
    document.getElementById("right").innerHTML = hype;
}

function area(w, h) {
    var area = w * h;
    document.getElementById("area").innerHTML = area;
}
var width = 10;
var height = 5;

function triarea(width, height) {
    var triarea = width * height;
    document.getElementById("triarea").innerHTML = triarea;
}



var isPalindrome = function(string) {
    if (string == string.split('').reverse().join('')) {
        alert(string + ' is palindrome.');
    } else {
        alert(string + ' is not palindrome.');
    }
}

document.getElementById('form_id').onsubmit = function() {
    isPalindrome(document.getElementById('your_input').value);
    return false;
}


function titleCase(str) {
    str = str.toLowerCase().split(' ');
    for (var i = 0; i < str.length; i++) {
        str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1);
    }
    var v = str.join(' ');
    document.getElementById("case").innerHTML = v;
}

function longest(ste) {
    var arr = ste.split(' ');
    var ted = 0;
    var some;
    for (var i = 0; i < arr.length; i++) {
        if (arr[i].length > ted) {
            ted = arr[i].length;
        }
    }
    for (var i = 0; i < arr.length; i++) {
        if (arr[i].length === ted) {
            some = arr[i];
        }

    }
    document.getElementById("longest").innerHTML = some;
}


function seek(sentance, word) {
    sentance = sentance.toLowerCase();
    word = word.toLowerCase();
    var s = 0;
    for (var i = 0; i < sentance.length; i++) {
        if (sentance[i] === word) {
            s++;
        }
    }
    document.getElementById("seek").innerHTML = s;
}

function calcCircumference(radius) {
    var circumference = Math.PI * radius * radius;
    document.getElementById("calcCircumference").innerHTML = circumference.toFixed(2);
}

function calcArea(radius) {
    var Area = Math.PI * radius * 2;
    document.getElementById("calcArea").innerHTML = Area.toFixed(2);
}