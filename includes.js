//1. What does it do? make sure to explain all the parameters. If it has a function as a parameter, make sure to explain all of the parameters for that function.
// the includes method takes a parameter, and what you put in the parameter is an item you want to look for within an array. if it finds what its looking for, it
// will return true, else it will return false.

//2. Does it edit the current array?
// No, It just serches through the array.

//3. What does it return?
// It returns true or false, depending if it found what it was serching for.

//4. How can I use this? Come up (not one off the internet) with a small real world example and explain it.
// A store has an inventory/catologe of items that they sell. If a customer wants to know if the store has a certian item they are looking for,
// you would need to serch through the array of items to see if you have the item.

//5. Build your real world example.
var readline = require('readline-sync')
var inventory = ["Socks", 'Shirts', "Shorts", "Pants", "Jeans", "Shoes"]

var item = readline.question("Hi! What are you looking for today? ")

var search = inventory.includes(item)

if (search == true) {
    console.log("Good news! We do have", item, "in our store.")
}
else {
    console.log("I'm sorry, unfortunetly we don't have", item, "in our store.")
}

