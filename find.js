//1. What does it do? make sure to explain all the parameters. If it has a function as a parameter, make sure to explain all of the parameters for that function.
// The find method goes through an array and serches for the first element that satisfies the requirments you provide within a function. Even if there are other 
// elements in the array that also satisfy the requirments, they don't get returned because they weren't the first one. In the parameters, you would call the function
// you want to use to evaluate the elements.

//2. Does it edit the current array?
// No, It just goes through the array to find what its looking for.


//3. What does it return?
// It returns the first element in the array that satisfies the requirements.

//4. How can I use this? Come up (not one off the internet) with a small real world example and explain it.
// If a teacher asks their students to answer a question, and then puts the student's answers, along with their names, into an array. using the find method, the teacher
// would be able to know who got the correct answer first.

//5. Build your real world example.
let responses = [{ name: "Sam", answer: "4"}, {name: "Jill", answer: "3"}, {name: "Melissa", answer: "7"}, {name: "Chuck", answer: "3"}]

let found = responses.find(function(element) {
    return element.answer === "3"
})
console.log("The correct answer was 3,", found.name, "was the first one to get it right.")