//1. What does it do? make sure to explain all the parameters. If it has a function as a parameter, make sure to explain all of the parameters for that function.
// The pop method removes the last element from an array and returns that element. Nothing goes in the parameters.

//2. Does it edit the current array?
// Yes, it removes an element from the end of the array 

//3. What does it return?
// It returns the element that was popped off.

//4. How can I use this? Come up (not one off the internet) with a small real world example and explain it.
// If you wanted to do a countdown from 10 to 0, you would have the numbers in an array and you would pop the numbers off the array one by one until you get to 0.

//5. Build your real world example.
var number = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
var readline = require('readline-sync')
console.log("Lets do a count down!")

while (number.length != 0) {
    var output = number.length
    console.log(number[output-1])
    number.pop()
}