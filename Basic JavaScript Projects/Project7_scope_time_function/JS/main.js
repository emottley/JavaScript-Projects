var global = 10; //declaring global variable
function function_Error() { //function which has be debugged using console
    var local = 100; //declaration of local variable
    document.getElementById("Error_Output").innerHTML = (local + global); //prints addition of local and global variable to html
}

function function_Method() { //declaring function
    if (new Date().getHours() >= 7 && new Date().getHours() < 17) { //runs code contained if hour of day is between 7 AND 17
        document.getElementById("method").innerHTML = "Good Day"; //writes to html doc in place referenced
    }
    else { //if the if statement does not meet condition, runs code below
        document.getElementById("method").innerHTML = "Good Night"; //writes to html doc in place referenced
    }
}

function function_ifelse() { //declaring function
    if ((document.getElementById("if_input").value % 2) == 0) { //checks if value inputted has remainder 0 if divided by 2, if true, runs code in block
        document.getElementById("if_output").innerHTML = "That is an even number."; //prints to html doc at id
    }
    else { //if the if statement condition is not met, runs code in block
        document.getElementById("if_output").innerHTML = "That is an odd number."; //prints to html doc at id
    }
}

function Time_function() { //declares function
    var Time = new Date().getHours(); //intializes local variable
    var Reply; //declares local varible to be assigned a value later
    if (Time < 12 == Time > 0) { //checks if variable is less then 12 and greater than 0, if both true, runs code in block
        Reply = "It is morning time!"; //assigns value to variable
    }
    else if (Time >= 12 == Time < 18) { //checks if variable is greater than or equal to 12, and less than 18. If both true, runs code block
        Reply = "It is afternoon."; //assigns value to variable
    }
    else { //if the if statement and else if statement conditions are not met, runs code block
        Reply = "It is evening time."; //assigns value to variable
    }
    document.getElementById("Time_of_day").innerHTML = Reply; //writes variable to html document at id location
}