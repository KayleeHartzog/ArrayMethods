//1. What does it do? make sure to explain all the parameters. If it has a function as a parameter, make sure to explain all of the parameters for that function.
// The Shift method removes the first element in an array and returns the element that was removed. There are no parameters.

//2. Does it edit the current array?
// Yes, it removes the first element and changes the size

//3. What does it return?
// it returns the element that was removed, which was the first element.


//4. How can I use this? Come up (not one off the internet) with a small real world example and explain it.
// You have a list of tasks you want to compleate. Your need to do them in order. Once you compleat the top item, you remove it from your list, and the next
// item becomes the top of your list.

//5. Build your real world example.
var readline = require('readline-sync')
var task
var toDoList =[]

while (task != "done") {
    task = readline.question('What task do you want to add to your to-do list? ')
    if (task != "done")
        toDoList.push(task)
    console.log("Your to-do list: ", toDoList)
}

while (toDoList.length != 0){
    var compleatTask = readline.question('Did you compleate the task at the top of your list?(Y/N) ')
    if (compleatTask == "Y" || compleatTask == 'y') {
        toDoList.shift()
        console.log("You compleated a task!")
        console.log("Your to-do list: ", toDoList)
    }
}

console.log("You are done! Celebrate!")
