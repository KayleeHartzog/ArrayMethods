//1. What does it do? make sure to explain all the parameters. If it has a function as a parameter, make sure to explain all of the parameters for that function.
// The splice method allows you to go into an array and eiher insert an element into the array, or replace an existing element. In the parameter you put 3 things;
// first, the starting index, basically where you want to insert or replace. Second, a 0 (for insert) or a 1(for replace). Third, the element that you wish to insert
// or use to replace an existing element.

//2. Does it edit the current array?
// Yes, it can add elements, or replace current elements.

//3. What does it return?
// it returns the the new array with all of the changes.

//4. How can I use this? Come up (not one off the internet) with a small real world example and explain it.
// If a scientist was collecting data and stored the data in the array, he might have put something in wrong and want to change it, or he might want to add some new
// data as well.

//5. Build your real world example.
var readline = require('readline-sync')
let data = []
let isDone

while (isDone != "done") {
    let index = readline.question('Where do you want to start(put the index)? ')
    let type = readline.question("Would you like to insert or replace?(0/1) ")
    let element = readline.question("What is the item you wish to insert/replace with? ")
    index = Number(index)
    type = Number(type)
    element = Number(element)
    data.splice(index, type, element)
    console.log("Here is your data:\n", data)

    isDone = readline.question("Are you done?(type 'done') ")
}