//1. What does it do? make sure to explain all the parameters. If it has a function as a parameter, make sure to explain all of the parameters for that function.
// the forEach function lets you go through each item of an array. It has a parameter, which should be a function which also has a parameter.

//2. Does it edit the current array?
// No, it just loops through each item, and other options of action can be added to the function.

//3. What does it return?
// I returns whatever is going on in the function.

//4. How can I use this? Come up (not one off the internet) with a small real world example and explain it.
// you put a collection of data into an array, and you would like to go through each of the items/data in the array
// so you can take them and add them together or just do something with all of it.

//5. Build your real world example.
var readline = require('readline-sync')
var data = []
var item
var sum = 0

while (item != "done") {
    item = readline.question("What data would you like to collect?(Type 'done' when done.) ")
    data.push(item)
}

var question = readline.question("Would you like to get the sum of this data?(Y/N) ")
if (question == "Y" || question == "y") {
    data.forEach(function(data) {
        var num = parseInt(data)
        sum += (num - 0)
    })
    console.log("This is the sum of your data: ", sum)
}
else {
    console.log("You did NOT make a sum of your data.")
}