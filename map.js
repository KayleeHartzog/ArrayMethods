//1. What does it do? make sure to explain all the parameters. If it has a function as a parameter, make sure to explain all of the parameters for that function.
// the map function takes the elements in the array and makes a change to each item, changes are specified by a function. In the parameters, you put the function
// you want to use for the changes.

//2. Does it edit the current array?
// No, it changes each element in the array, according to the specifications made in the function.

//3. What does it return?
//It returns an array of the outputs of the elements.

//4. How can I use this? Come up (not one off the internet) with a small real world example and explain it.
// A teacher decides that they want to curve a recent test, since the average was very low. If all of the student's grades were in an array, you could use the
// map function in order to change their grades a bit, and add the same amount of points to each score.

//5. Build your real world example.
var readline = require('readline-sync')
var OriginalGrades = [67, 59, 81, 73, 72, 71, 69, 80]

var amount = readline.question("How many points would you like to add to each student's score? ")
amount = Number(amount);
const newGrades = OriginalGrades.map(x => (x  + amount))

console.log("Here are the new grades:\n", newGrades)