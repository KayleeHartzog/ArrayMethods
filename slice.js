//1. What does it do? make sure to explain all the parameters. If it has a function as a parameter, make sure to explain all of the parameters for that function.
// The slice method returns a shallow copy of a portion of an array into a new array object. In the parameters, you put two things (begin, end). begin is where in 
// the array you would like to start copying from. end is where you would like to finish copying the array, although it doesn't include the item where you declared the end.

//2. Does it edit the current array?
// No, it just make a copy of some of its elements and puts it into a new array object.

//3. What does it return?
// It returns a copy of the elements you wanted to copy in a new array object.

//4. How can I use this? Come up (not one off the internet) with a small real world example and explain it.
// If a teacher wanted to take their class and split the students into their own groups, they would split parts of an array that contained everyone's name and add certian
// students to a different array/group. 

//5. Build your real world example.
var readline = require('readline-sync')
var classList = ["Aaron", "Ben", "Clint", "David", "Eliza", "Francisco", "Gloria", "Heather", "Ian", "Jordan", "Kaylee", "Logan", "Monica", "Noah", "Owen", "Paul", "Quin"]
var input

    console.log("Create you group. Type 'done' when done.\n")
    while (input != "done"){
    var begin = readline.question('Where do you want to begin? ')
    var end = readline.question('Where do you want to end? ')
    var group = classList.slice(begin, end)
    console.log("Here is the group: ", group)
    input = readline.question('Done? ')
   }
