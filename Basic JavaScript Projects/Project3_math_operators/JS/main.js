function addition_Function() { //creating an addition function
    var addition = 2 + 2; //declaring a local variable for the function to use
    document.getElementById("Add").innerHTML = "2 + 2 = " + addition; //finds where in the html document to write the string and variable
}

function subtraction_Function() { //creating a subtraction function
    var Subtraction = 5 - 2; //declaring a local variable for the function to use
    document.getElementById("Subtract").innerHTML = "5 - 2 = " + Subtraction //finds where in the html document to write the string and variable
}

function multiplication_Function() { //creating a multiplication function
    var Multiplication = 6 * 8; //declaring a local variable for the function to use
    document.getElementById("Multiply").innerHTML = "6 x 8 = " + Multiplication; //finds where in the html document to write the string and variable
}

function division_Function() { //creating a division function
    var Division = 48 / 6; //declaring a local variable for the function to use
    document.getElementById("Divide").innerHTML = "48 / 6 = " + Division; //finds where in the html document to write the string and variable
}

function more_Math() { //creating a function using multiple different operations
    var Math = (1 + 2) * 10 / 2 - 5; //declaring a local variable for the function to use
    document.getElementById("Math").innerHTML = "1 plus 2, multiplied by 10, divided in half and then subtracted by 5 equals " + Math; //finds where in the html document to write the string and variable
}

function remainder_Function() { //creating a function that displays a remainder
    var Remainder = 25 % 6; //delcaring a local variable for the function to use
    document.getElementById("Remainder").innerHTML = "When you divide 25 by 6 you have a remainder of: " + Remainder; //finds where in the html document to write the string and variable
}

function negation_Operator() { //creating a function that displays the use of the negation operator
    var x = 10; //declaring a local variable for the function to use
    document.getElementById("Negate").innerHTML = -x; //finds where in the html document to write the string and variable
}

var x = 0; //shared global variable used by increment_Function and decrement_Function

function increment_Function() { //creating a function that increments the global x variable then displays it
    x++; //increments the variable x
    document.getElementById("Increment").innerHTML = x; //finds where in the html document to write the result of the function
}

function decrement_Function() {//creating a function that decrements the global x variable then displays it
    x--; //decrements the variable x
    document.getElementById("Decrement").innerHTML = x; //finds where in the html document to write the result of the function
}

function random_Function(){ //creating a function that makes a random number between 0 and 1, multiples that number by 100, then rounds the number down to the nearest whole number.
    var x = Math.floor(Math.random() * 100); //declares a local variable for the random number
    document.getElementById("Random").innerHTML = x; //finds where to write the variable in the html document
}