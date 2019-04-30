//1. What does it do? make sure to explain all the parameters. If it has a function as a parameter, make sure to explain all of the parameters for that function.
// The concat method takes two arrays and puts them together into one. in the parameters, you would put the name of the array you want to concatenate.

//2. Does it edit the current array?
// Yes, it adds another array onto the end of it.

//3. What does it return?
// It returns the result of the first array with the second array added onto the back of it.

//4. How can I use this? Come up (not one off the internet) with a small real world example and explain it.
// Say maybe you and your spouse both come up with a shoping list full of items you need to get at the store.
// instead of having two different lists, it would be nice to have everything on one list, so you would concatenate them.

//5. Build your real world example.
var readline = require('readline-sync')
var spouseList = ["Carrots", "bowtie noodles", "chicken", "hot dogs"]
var shoppingList = []

var item
while (item != "done") {
    item  = readline.question('What item do you want to add to your list?(Type "done" when done.) ')
    if (item != "done")
        shoppingList.push(item)
}

var question = readline.question("Would you like to add your spouse's list to your own?(Y/N) ")

if (question == "Y" || question == "y") {
    var newList = shoppingList.concat(spouseList)
    console.log("List added!\nHere is your shopping list:\n ", newList)
}
else {
    console.log("Here are your two lists:\n", shoppingList, "\n", spouseList)
}