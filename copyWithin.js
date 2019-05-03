//1. What does it do? make sure to explain all the parameters. If it has a function as a parameter, make sure to explain all of the parameters for that function.
// The copy within method copys a part of the array and replaces other elements in the array with the copy. In the parameters, you can put 3 things;
// first, you put the starting index, where you want to start puting the copied code. The second is an index of where you want to start copying the code. The
// third is where you want to finish copying the code. If you put nothing in the third, it will copy till the end

//2. Does it edit the current array?
// Yes, it changes the elements.

//3. What does it return?
// It returns the new array with the new changes.

//4. How can I use this? Come up (not one off the internet) with a small real world example and explain it.
// Its aprils fools day and a teacher (I'm so sorry that all of my examples include either a techer or class, I guess those are just things that I usually think about?)
// has decided to be mean to their students and change all of their grades to 'C's. While the techer could do this with a splice (like any normal person would do), 
// they've decided to be mean to themselves and used the copyWithin method. Yes, yes, I know this is a very bad example. But honestly I've spent too long for my liking tying
// to come up with something creative for this, and I just want to move on.

//5. Build your real world example.
var readline = require('readline-sync')
let grades = ["A", "B", "A", "C", "A", "D"]
let isDone

while (isDone != "done") {
    let index = readline.question('Where do you want to start(put the index)? ')
    let type = readline.question("Where would you like to start copying from? ")
    let element = readline.question("Where would you like to finish copying at? ")
    index = Number(index)
    type = Number(type)
    element = Number(element)
    
    grades.copyWithin(index, type, element)
    console.log("Here are the grades:\n", grades)

    isDone = readline.question("Are you done?(type 'done') ")
}