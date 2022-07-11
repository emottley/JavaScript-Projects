function Ride_Function() {
    var Height, Can_ride; //declares 2 variables within function
    Height = document.getElementById("Height").value; //pulls the value from the html doc and stores within variable
    Can_ride = (Height < 52) ? "You are too short":"You are tall enough"; //uses ternary operator in variable
    document.getElementById("Ride").innerHTML = Can_ride + " to ride."; //prints to html doc
}

function Vote_Function() {
    var Age, Can_vote; //declares 2 variable wtihin function
    Age = document.getElementById("Age").value; //pulls the value from the html doc and stores within variable
    Can_vote = (Age >= 18) ? "You can vote!":"You are not old enough to vote"; //uses ternary operator in variable
    document.getElementById("Vote").innerHTML = Can_vote; //prints to html doc
}

function Vehicle(Make, Model, Year, Color) { //establishes constructor
    this.Vehicle_Make = Make; //establishes constructor variable
    this.Vehicle_Model = Model; //establishes constructor variable
    this.Vehicle_Year = Year; //establishes constructor variable
    this.Vehicle_Color = Color; //establishes constructor variable
}
var Jack = new Vehicle("Dodge", "Viper", 2020, "Red");
var Emily = new Vehicle("Jeep", "Trail Hawk", 2019, "White and Black"); //Three examples of using the constructor and storing them in variables
var Erik = new Vehicle("Ford", "Pinto", 1971, "Mustard");
function myFunction() { //uses function to print to screen using variables created by the constructor
    document.getElementById("Keywords_and_Constructors").innerHTML = "Erik drives a " + Erik.Vehicle_Color +
    "-colored " + Erik.Vehicle_Model + " manufactured in " + Erik.Vehicle_Year;
}

function Student(first_name, last_name, GPA, grade_level) { //establishes constructor
    this.Student_first_name = first_name; //establishes constructor variable
    this.Student_last_name = last_name; //establishes constructor variable
    this.Student_GPA = GPA; //establishes constructor variable
    this.Student_grade_level = grade_level; //establishes constructor variable
}
var Zack = new Student("Zack", "Jackson", 3.5, 12);
var Joe = new Student("Joe", "Jackson", 3.8, 11); //Three examples of using the constructor and storing them in variables
var Sally = new Student("Sally", "Jackson", 3.2, 10);
function anotherFunction() { //uses function to print to screen using variables created by the constructor
    document.getElementById("New_and_This").innerHTML = "First name: " + Sally.Student_first_name 
    + " Last name: " + Sally.Student_last_name + " GPA: " + Sally.Student_GPA + " Grade Level: " + Sally.Student_grade_level;
} //prints to selected element and uses variables created from constructer

function count_Function() { //initilization of function
    document.getElementById("Nested_Function").innerHTML = Count(); //selects where in html doc to place results from Count()
    function Count() { //declaration of function Count()
        var Starting_point = 9; //declaration of variable
        function Plus_one() {Starting_point++;} //nested function that increments previously declared function by 1 when called
        Plus_one(); //calls function Plus_one()
        return Starting_point; //returns variable to previous function
    }
}