function My_First_Function() { //Declaration of function
    var str = "This is the button text!"; //Assigning string variable in function
    str += " And this is second piece of text."; //Adding concatenated string to previously assigned variable
    document.getElementById("Paragraph").innerHTML = str; //Go to reference id and change text to variable str
}

function My_Second_Function() {
    var str = "Clicked";
    document.getElementById("Button").innerHTML = str;
}