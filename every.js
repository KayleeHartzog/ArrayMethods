//1. What does it do? make sure to explain all the parameters. If it has a function as a parameter, make sure to explain all of the parameters for that function.
// The every Method is able to test whether or not the elements in an array meet the requirements stated in a different function. In the parameters, you would place
// the function you would like to check the array against.

//2. Does it edit the current array?
// No, it just tests each element to see if they meet requirements.

//3. What does it return?
// It returns true if all elements meet requirements. It returns false if one or more of the elements do not meet requirements.


//4. How can I use this? Come up (not one off the internet) with a small real world example and explain it.
// Brother McKinney wants to make sure that his employees are working 15 hours each week. If he has an array of all the employee's hours, he could use this method
// to check and see if the hours are being meet.

//5. Build your real world example.
var week01 = [30, 40, 16, 15, 15, 17]
var week02 = [30, 40, 15, 13, 12, 23]

function isAboveThreshold(value) {
    return value >= 15
}

console.log("Checking Week 1:\n")
var check1 = week01.every(isAboveThreshold)
if (check1 == true) {
    console.log("Every one has put in more than 15 hours in Week 1.\n")
}
else {
    console.log("NOT EVERY ONE HAS 15 HOURS!")
}

console.log("Checking Week 2:\n")
var check2 = week02.every(isAboveThreshold)
if (check2 == true) {
    console.log("Every one has put in more than 15 hours in Week 1.\n")
}
else {
    console.log("NOT EVERY ONE HAS 15 HOURS!")
}