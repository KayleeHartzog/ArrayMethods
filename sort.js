//1. What does it do? make sure to explain all the parameters. If it has a function as a parameter, make sure to explain all of the parameters for that function.
// The sort method take an array and makes each item into values and then sorts them from smallest to biggest. There is nothing in the parameters.

//2. Does it edit the current array?
// Yes, it rearanges the items from least to greatest

//3. What does it return?
// It doesn't return any thing.


//4. How can I use this? Come up (not one off the internet) with a small real world example and explain it.
// Almost always in classes, the teacher would like to have a roll with the student's names in alphabetical order. You could use the sort method to accomplish this.

//5. Build your real world example.
var readline = require('readline-sync')
//var students = ["Geroge", "Melanie", "Sam", "Josh", "Keith", "Logan", "Heather", "Justin", "Kaylee", "Jesse", "Melissa", "Shawn"]
var students = []
var input

console.log("\nMake a list of the students in your class. Type 'done' when you are finished\n")
while (input != "done") {
    input = readline.question("Please enter a name (or enter 'done'): ")
    if (input != "done") {
        students.push(input)
    }

}

console.log("List of students: ", students)
var answer = readline.question("Would you like to sort your class list?(Y/N) ")
if (answer == "Y" || answer == "y") {
    students.sort();
    console.log("Sorted list: ", students)
}