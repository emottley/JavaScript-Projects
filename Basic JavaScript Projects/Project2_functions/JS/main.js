function My_First_Function() { //Declaration of function
    var str = "This is the button text!"; //Assigning string variable in function
    str += " And this is second piece of text." //Adding concatenated string to previously assigned variable
    document.getElementById("Button_Text").innerHTML = str; //Go to reference id and change text to variable str
}