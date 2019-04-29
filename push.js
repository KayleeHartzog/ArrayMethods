//1. What does it do? make sure to explain all the parameters. If it has a function as a parameter, make sure to explain all of the parameters for that function.
// The push Method adds one or more elements to the back of the array and returns the length of the array. 
// In order to do the push, call the array that you want to push onto first, then use the push method for the array, then in the parameters you would write however many
// items you would like to add to the end of the array. The type of Item you could push could be almost anything. you can push number, strings, and even other arrays all 
// into the one aray

//2. Does it edit the current array?
// yes, it adds an item(S) onto the end of the array and changes the lenght of it.

//3. What does it return?
// It returns the new length of the array.

//4. How can I use this? Come up (not one off the internet) with a small real world example and explain it.
// One of the best ways I can think of this being used in the real world would be when people stand in line, and more people jump into the back of the line.
// If you were to show this electronically, it would be like a queue or a waiting list. The waitlist for classes here on campus is a good example.

//5. Build your real world example.
var waitList = ['Jamie', 'Cam', 'Sam']
var readline = require('readline-sync')
console.log("There are currently ", waitList.length, " people on the wait list for CS235.\n")
console.log(waitList)

var answer = readline.question('Would you like to be added to the wait list for CS235?(Y/N) ')

if (answer == 'Y' || answer == "y") {
    var name = readline.question('What is your name? ')
    waitList.push(name)
    console.log("You have been added to the wait list.")
    console.log(waitList)
}
else {
    console.log("You have NOT been added to the wait list.")
}
