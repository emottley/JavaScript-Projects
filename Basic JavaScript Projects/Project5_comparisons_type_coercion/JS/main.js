function function_Coercion() {
    document.getElementById("coercion").innerHTML = "10" + 5 + " " + typeof("10" + 5); //finds coercion and uses type coercion to return result to html doc
}

function function_NaN() {
    document.getElementById("Nan").innerHTML = 0/0; //finds Nan and returns Nan to the html document
}

function function_Truenan() {
    var str = "String"; //declaration of variable str
    document.getElementById("NaN_True").innerHTML = isNaN(str); //checks whether variable str is not a number and returns true or false to the html doc
}

function function_Falsenan() {
    var num = 10; //declaration of variable num
    document.getElementById("NaN_False").innerHTML = isNaN(num); //checks whether variable num is a num and returns true or false to the html doc
}

function function_infinity() {
    document.getElementById("Infinity").innerHTML = 2E310; //function returns Infinity to the html doc because the number is larger than javascript allows
}

function function_negInfinity() {
    document.getElementById("NegInfinity").innerHTML = -2E310; //function returns -Infinity to the html doc because the number is larger than javascript allows
}

function function_isTrue() {
    document.getElementById("isTrue").innerHTML = (2 < 3); //function uses < conditional and returns true
}

function function_isFalse() {
    document.getElementById("isFalse").innerHTML = (2 > 3); //function uses > conditional and returns false
}

console.log("Is 1 greater than 2?"); //writes string to console
console.log(1 > 2); //returns false to console

function function_compTrue() {
    document.getElementById("compareTrue").innerHTML = 10==10; //uses == conditional to compare both sides of the == to be equal and returns true
}

function function_compFalse() {
    document.getElementById("compareFalse").innerHTML = 1==4; //uses == conditional to compare both sides of the == to be equal and returns false
}

function function_comp1() {
    var str = "String"; //declaration of variable str
    var str2 = "String"; //declaration of variable str2
    document.getElementById("comp1").innerHTML = str === str2; //checks if both str and str2 are equal and reutrns true
}

function function_comp2() {
    var str = "String"; //declaration of variable str
    var num = 27; //declaration of var num
    document.getElementById("comp2").innerHTML = str===num; //checks if variable str and num are equal and returns false
}

function function_comp3() {
    var str = "27"; //declaration of variable str
    var num = 27; //declaration of variable num
    document.getElementById("comp3").innerHTML = str===num; //checks if variable str and num are equal and returns false
}

function function_comp4() {
    var str = "String"; //declaration of variable str
    var str2 = "Different String"; //declaration of variable str2
    document.getElementById("comp4").innerHTML = str===str2; //checks if str and str2 are equal, returns false to html doc
}

function function_andTrue() {
    document.getElementById("andTrue").innerHTML = 2 < 3 && 3 < 4; //checks if both sides of conditional are true and returns true
}

function function_andFalse() {
    document.getElementById("andFalse").innerHTML = 2 > 3 && 3 < 4; //checks if both sides of conditional are true and returns false
}

function function_orTrue() {
    document.getElementById("orTrue").innerHTML = 2 > 3 || 3 < 4; //checks if one or both sides of conditional are true and returns true
}

function function_orFalse() {
    document.getElementById("orFalse").innerHTML = 2 > 3 || 3 > 4; //checks if one or both sides of conditional are true and returns false
}

function function_notTrue() {
    document.getElementById("notTrue").innerHTML = !(5 > 10); //returns the opposite of the conditional, true
}

function function_notFalse() {
    document.getElementById("notFalse").innerHTML = !(5 < 10); //returns the opposite of the conditional, false
}