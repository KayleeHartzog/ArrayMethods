//1. What does it do? make sure to explain all the parameters. If it has a function as a parameter, make sure to explain all of the parameters for that function.
// The some method is kind of like the every method, except it only looks to see in at least one element in the array matches the requirements set in the function.

//2. Does it edit the current array?
// No, it just looks through the array.

//3. What does it return?
// It returns true if at least one of the elements in the array match the requirements in the function. It returns false if none of the elements match the
// the requirements.

//4. How can I use this? Come up (not one off the internet) with a small real world example and explain it.
// Brother McKinney wants to know if anyone is not going to be able to make it to the meeting next week. Using the some method, you would be able to know if someone
// was not going to be there.

//5. Build your real world example.
var readline = require('readline-sync')
var responses = ['yes', 'yes', 'yes', 'yes', 'yes', 'yes', 'no']

function checkReponses(value) {
    return value == 'yes'
}

console.log("Checking reponses:\n")
var check = responses.some(checkReponses)

if (check == true) {
    console.log("Everyone is going to the meeting.\n")
}
else {
    console.log("Someone is not going to the meeting!\n")
}
