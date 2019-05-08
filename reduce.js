//1. What does it do? make sure to explain all the parameters. If it has a function as a parameter, make sure to explain all of the parameters for that function.
// The reduce method allow you to combine all the elements of an array into a single object. this is great for mathmatical stuff. In the parameters, you would put
// function you want to use for reducing, and you can also put another value you would like to be included in the output.

//2. Does it edit the current array?
// No, it just outputs the result of the reduce, but nothing gets changed.

//3. What does it return?
// It returns the output of the function. For example, if you wanted to add all the number in an array together, the sum would be returned.

//4. How can I use this? Come up (not one off the internet) with a small real world example and explain it.
// A project directer wants to know how many hours have been put into a project his employess have been working on. He has all of the employees's hours put into an array,
// and could use the reduce method to easily total up all of the hours they've spent on the project.

//5. Build your real world example.

// example with a starting accumulator value
var readline = require('readline-sync')
var hours = [43, 54, 24, 34, 33, 64, 35, 41, 43, 26]

const reducer = (accumulator, currentValue) => accumulator + currentValue

var sum = hours.reduce(reducer, 32)

console.log("\nTotal hours for this project:\n" ,sum)


// example without a starting accumulator value

var hours2 = [47, 54, 25, 44, 35, 64, 35, 41, 43, 36, 50]

const reducer2 = (currentIndex, currentValue) => currentIndex + currentValue

var sum2 = hours2.reduce(reducer2)

console.log("\nTotal hours for the second project:\n" ,sum2)