function Call_Loop() { //function definition
    let i = 0; //variable declaration
    let x = ""; //variable declaration

    while (i < 11) { //while loop with counter conditional
        x += " " + i; //variable adds a space, then number in the counter to string variable.
        i++; //increment counter each iteraiton
    }
    document.getElementById("Loop").innerHTML = x; //writes to html document after loop
    document.getElementById("Length").innerHTML = "The string above is " + x.length +  " character(s) long."; //writes to html document after loop
}

var Instruments = ["Guitar", "Drums", "Piano", "Bass", "Violin", "Trumpet", "Flute"]; //variable declaraiton of string array
var Content = ""; //declaration of string variable
var Y; //counter variable declaration
function for_Loop() { //funciton definition
    for (Y = 0; Y < Instruments.length; Y++) { //for loop with counter and conditional of array length
        Content += Instruments[Y] + "<br>"; //places each value of the array index into string variable, and adds break
    }
    document.getElementById("List_of_Instruments").innerHTML = Content; //writes to html document after for loop
}

function array_Function() { //function definition
    var Cat_Picture = ["sleeping", "playing", "eating", "purring"]; //variable declaration of string array
    document.getElementById("Array").innerHTML = "In this picture, the cat is " + Cat_Picture[2] + "."; //writes to html doc string with array at index 2
}

function constant_Function() { //function definition
    const Musical_Instrument = {type:"guitar", brand:"Fender", color:"black"}; //variable constant of objects
    Musical_Instrument.color = "blue"; //changing value of constant
    Musical_Instrument.price = "$900"; //changing value of constant
    document.getElementById("Constant").innerHTML = "The cost of the " + Musical_Instrument.type + " was " + Musical_Instrument.price; //writing changed value of objects in string to html doc
}

function return_Function() { //function definition
    let name = "Evan" //variable declaration

    function inner_Function(name) { //function within function
        return "Hello " + name; //return from 2nd function to 1st function
    }

    document.getElementById("Return").innerHTML = inner_Function(name); //writes variable back to html doc
}

function let_Function() { //function definition
    let car = { //declaration of object variable
        make: "Subaru ",
        model: "WRX ",
        year: "2016 ",
        color: "blue ",
        description : function() { //function within object value as a function, calling other values within the object
            return "The car is a " + this.year + this.color + this.make + this.model;
        }
    };
    document.getElementById("Car_Object").innerHTML = car.description(); // calls the object's function, which returns a string, then writes the string to the html doc
}

function break_Function() { //function definition
    let text = "", x = 0; //declaration of two variables
    while (x < 11) { //while loop with conditional
        text += x + "<br>"; //counter variable and <br> element in variable text each iteration
        x++; //counter increments each iteration
        if (x == 5) break; //break statement that breaks the loop when condition met
    }
    document.getElementById("break").innerHTML = text; //writes variable to html doc
}

function continue_Function() { //function definition
    let text = "", x = 0; //declaration of two variables
    while (x < 11) { //while loop with conditional
        x++; //counter that incrememnts by 1 each interation
        if (x == 5) continue; //if statement that is checked each iteraiton for conditional, then continues directly to next iteration when met
        text += x + "<br>"; //updates text variable to include counter and <br> element each iteration
    }
    document.getElementById("continue").innerHTML = text; //writes variable to html doc
}