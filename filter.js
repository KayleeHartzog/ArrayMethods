//1. What does it do? make sure to explain all the parameters. If it has a function as a parameter, make sure to explain all of the parameters for that function.
// the filter method creates a new array filled with the elements of an array that met requirements specified by a function. In the parameters, you put the array
// you want to use and the function with the requirement you want to follow. 

//2. Does it edit the current array?
// No, it does not change the original array. It does make a new one though.

//3. What does it return?
// It returns a new array with the elements that met the specified requirements.

//4. How can I use this? Come up (not one off the internet) with a small real world example and explain it.
// You have a class full of students, and you want to take it and create a new list full of only the names that start with a certain letter, for example, 'a'.

//5. Build your real world example.
var readline = require('readline-sync')
var classList = ['Sam', "Abby", "Ashley", "Geroge", "Alex", "Jill", "Shawn", "Melissa", "Heather"]

var input = readline.question("Choose a letter to organize a new list of students by: ")

const result = classList.filter(item => item[0] === input)

console.log("Here is your new list:\n", result)