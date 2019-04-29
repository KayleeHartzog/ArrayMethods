//1. What does it do? make sure to explain all the parameters. If it has a function as a parameter, make sure to explain all of the parameters for that function.
// The unshift method adds one or more elements to the beginning of an array and returns the new length of the array. The Parameters will take any kind of object,
// and any number of objects.

//2. Does it edit the current array?
// Yes, it adds any number of elements to the beginning to an array. It also changes the length of the array.

//3. What does it return?
// It returns the new length of the array.

//4. How can I use this? Come up (not one off the internet) with a small real world example and explain it.
// hospitals have waiting lists. But there happened to be an emergency, like some one needs to see the doctor right now becuase they are dieing, they would need to be
// at the front of the list.

//5. Build your real world example.
var readline = require('readline-sync')
var currentWaitList = ['Tom', 'Lena', 'Joe']

console.log("Here is the current wait list: ", currentWaitList)

var name = readline.question('Please enter your name: ')
var emergency = readline.question('Is this visit an emergency?(Y/N) ')

if (emergency == "Y" || emergency == "y") {
    currentWaitList.unshift(name)
    console.log("You have been added to the front of the wait list. PLEASE DONT DIE!")
    console.log("Here is the current wait list: ", currentWaitList)
}
else {
    currentWaitList.push(name)
    console.log("You have been added to the list.")
    console.log("Here is the current wait list: ", currentWaitList)
}
