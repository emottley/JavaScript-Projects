function dictionary_Function() { //function used to call a kvp
    var Student = { //var Student declared as dictionary
        first_name : "Evan",
        gpa : 3.5,              //declaring kvp's
        class : "Javascript"
    };
    delete Student.gpa; //deleting a specific kvp
    document.getElementById("Dictionary").innerHTML = Student.gpa; //calling the deleted kvp, which returns undefined, to be written in html doc
}