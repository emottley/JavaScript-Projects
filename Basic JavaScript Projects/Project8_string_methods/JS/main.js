var Sentence = "All work and no play makes Johnny a dull boy.";

function full_Sentence() { //function example of using concatenate
    var part_1 = "I have ";
    var part_2 = "made this "; //declaring 4 variables with string inputs
    var part_3 = "into a complete ";
    var part_4 = "sentence.";
    var whole_sentence = part_1.concat(part_2, part_3, part_4); //declaring variable of 4 previous variables concatenated
    document.getElementById("Concatenate").innerHTML = whole_sentence; //prints variable to html doc
}

function slice_Method() { //function example of using slice
    var Section = Sentence.slice(27,33); //variable declared using slice from global variable. Parameters select index points to pick from.
    document.getElementById("Slice").innerHTML = Section;//prints variable to html doc
}

function toUpperCase_Method() { //function example of using toUpper method. Converts each character to uppercase
    var uppercase = Sentence.toUpperCase(); //stores global variable after using toUpper method.
    document.getElementById("toUpperCase").innerHTML = uppercase;//prints variable to html doc
}

function search_Method() { //function example of using search method
    let position = Sentence.search("Johnny"); //variable declared with value of first index where "Johnny" is found in global variable
    document.getElementById("Search").innerHTML = position; //prints variable to html doc
}

function string_Method() { //function example of using toString method
    var X = 182; //declares integer variable
    document.getElementById("Numbers_to_string").innerHTML = X.toString(); //prints to html doc after converting variable from int to string
}

function precision_Method() { //function example of using precision method
    var X = 12938.3012987376112; //declaration of variable
    document.getElementById("Precision").innerHTML = X.toPrecision(10); //prints to html doc after using precision method, after selecting the index length of variable
}

function fixed_Method() { //function example of using fixed method
    var x = 3.14159265359 //declaration of variable
    document.getElementById("Fixed").innerHTML = x.toFixed(2); //prints variable to html doc, after using fixed method to select how many places after decimal remain
}

function value_Method() { //function example of using valueOf method
    var x =  new String("Hello World!"); //declaration of variable object
    document.getElementById("Value").innerHTML = x.valueOf(); //returns primitive form of variable. From string object to string to html doc.
}