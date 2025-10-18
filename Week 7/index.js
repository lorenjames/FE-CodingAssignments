console.log(`Question 1: 
    
    Create an array called ages that contains the following values: 3, 9, 23, 64, 2, 8, 28, 93.
Programmatically subtract the value of the first element in the array from the value in the last element of the array.
Do not use numbers to reference the last element, find it programmatically.
ages[7] - ages[0] is not allowed!
Add a new age to your array and repeat the step above to ensure it is dynamic. (works for arrays of different lengths).
Use a loop to iterate through the array and calculate the average age.`)
let ages = [3, 9, 23, 64, 2, 8, 28, 93] //assigning values to array

let newAge = (ages[ages.length - 1] - ages[0]) //new age variable equal to first value of array subtracted from the last value

console.log(`First age (${ages[0]}) subtracted from Last age (${ages[ages.length - 1]}) = ${newAge}`)

ages.push(40) //adding new value to end of array

newAge = (ages[ages.length - 1] - ages[0]) //updating the new age value to show dynamic code

console.log(`Updated with added age (${ages[ages.length - 1]}) 
    First age (${ages[0]}) subtracted from Last age (${ages[ages.length - 1]}) is now ${newAge}`)

let sumAge = 0;

//loop to add age values to later calculate average
for (let i = 0; i < ages.length; i++) {
    sumAge += ages[i];
}

//printing out average of ages
console.log(`Average of all ages: ${sumAge / ages.length}`);

console.log("-----------------------------------------------------------")
console.log(`Question 2: 

    Create an array called names that contains the following values: 'Sam', 'Tommy', 'Tim', 'Sally', 'Buck', 'Bob'.
Use a loop to iterate through the array and calculate the average number of letters per name.
Use a loop to iterate through the array again and concatenate all the names together, separated by spaces.`)

//initialize array of names
let names = ['Sam', 'Tommy', 'Tim', 'Sally', 'Buck', 'Bob']

//initialize sum variable
let sumChar = 0

//loop to sum character lenghts of items in array
for (let i = 0; i < names.length; i++) {
    sumChar += names[i].length;
}

//printing out average char length of names in array
console.log(`Average character length of names in array: ${sumChar / names.length}`)

//initialize variable
let concatNames = ""

//loop to concat names from array
for (let i = 0; i < names.length; i++) {
    concatNames += (names[i] + " ")
}

//printing out result
console.log(`Concatenated names: ${concatNames}`)

console.log("-----------------------------------------------------------")
console.log(`Question 3: 

   How do you access the last element of any array?`)

console.log(`You access the last element of an array by using the length property and subracting 1 (zero indexed). ie: array[array.length - 1]`)

console.log("-----------------------------------------------------------")
console.log(`Question 4: 

   How do you access the first element of any array?`)

console.log(`You access the first element of an array by using the 0 index. ie: array[0]`)

console.log("-----------------------------------------------------------")
console.log(`Question 5: 

   Create a new array called nameLengths. Write a loop to iterate over the previously created names array and add the length of each name to the nameLengths array.
For example:

let names = ["Kelly", "Sam", "Kate"];    // starting with this array
let nameLengths = [5, 3, 4];             // create a new array`)

//initialize array
let nameLengths = [];

//loop through array to create a new array with length values
for (let i = 0; i < names.length; i++) {
    nameLengths.push(names[i].length)
}

//print out result
console.log(`Name length array: ${nameLengths}`)

console.log("-----------------------------------------------------------")
console.log(`Question 6: 

   Write a loop to iterate over the nameLengths array and calculate the sum of all the elements in the array.`)
//initialize variable
let sumNameLengths = 0

//loop through previous name lengths array to create a sum of length
for (let i = 0; i < nameLengths.length; i++) {
    sumNameLengths += nameLengths[i]
}

//print result
console.log(`Sum of name lengths: ${sumNameLengths}`)

console.log("-----------------------------------------------------------")
console.log(`Question 7: 

   Write a function that takes two parameters, 
   word and n, as arguments and returns the word concatenated to itself n number of times. 
   (i.e. if I pass in 'Hello' and 3, I would expect the function to return 'HelloHelloHello').`)

//create function
function question7(word, n) {
    let concatVal = "" //initialize var to be returned
    for (let i = 0; i < n; i++) { //loop to concat the word, n number of times
        concatVal += word
    }

    return concatVal

}

//print restuls
console.log(`Concatenated values: ${question7("Antique", 5)}`)

console.log("-----------------------------------------------------------")
console.log(`Question 8: 

   Write a function that takes two parameters, firstName and lastName, and returns a full name.
   The full name should be the first and the last name separated by a space.`)

//create function
function fullName(firstName, lastName) { //takes two params
    return `${firstName} ${lastName}` //returns string literal of the two params concatenated with a space between
}

//print out results
console.log(`Full Name is: ${fullName("John", "Smith")}`)

console.log("-----------------------------------------------------------")
console.log(`Question 9: 

   Write a function that takes an array of numbers and returns true if the sum of all the numbers in the array is greater than 100.`)

//initialize array of numbers
let numbers = [5, 10, 24, 15];

//create function
function greaterThanOneHundred(array) {
    let sum = 0; //initialize var to be returned
    for (let i = 0; i < array.length; i++) { //loop through array of numbers to find sum
        sum += array[i];
    }

    if (sum > 100) { //if statement to see if the sum of numbers in array is greater than 100
        return true
    } else return false;
}

//print results
console.log(`The sum of all numbers in the given array are greater than 100: ${greaterThanOneHundred(numbers)}`)


console.log("-----------------------------------------------------------")
console.log(`Question 10: 

   Write a function that takes an array of numbers and returns the average of all the elements in the array.`)

//initialize array of numbers
let avgNumbers = [5, 10, 98, 3, 33, 56]

//create function that takes one param
function findAvgOfArray(array) {
    let sumNums = 0

    for (let i = 0; i < array.length; i++) { //loops through array passed as param and adds numbers from array
        sumNums += array[i];
    }

    return sumNums / array.length //returns average of numbers in array

}

//prints result
console.log(`Average of values in array: ${findAvgOfArray(avgNumbers)}`)



console.log("-----------------------------------------------------------")
console.log(`Question 11: 

   Write a function that takes two arrays of numbers and returns true if the average of the elements 
   in the first array is greater than the average of the elements in the second array.`)

//initialize two arrays of numbers
let array1 = [5, 6, 70, 55, 23, 3]
let array2 = [9, 5, 7, 88, 4, 5]

//create function that takes two arrays as params
function compareAvgArrays(array1, array2) {
    //initialize two vars to be used as sum
    let sumArray1 = 0
    let sumArray2 = 0

    //initialize two vars to be used as avg
    let avgArray1 = 0
    let avgArray2 = 0

    for (let i = 0; i < array1.length; i++) { //loops through first array to add values
        sumArray1 += array1[i];
    }

    avgArray1 = sumArray1 / array1.length; //finds average of first array

    for (let i = 0; i < array2.length; i++) { //loops through second array to add values
        sumArray2 += array2[i];
    }

    avgArray2 = sumArray2 / array2.length; //finds average of second array

    if (avgArray1 > avgArray2) { //if statement to see if the avg of array 1 is greater than the avg of array 2
        return true
    } else {
        return false
    }
}

console.log(`Average of array 1 is larger than the average of values in array 2: ${compareAvgArrays(array1, array2)}`)


console.log("-----------------------------------------------------------")
console.log(`Question 12: 

   Write a function called willBuyDrink that takes a boolean isHotOutside, and a number moneyInPocket, 
   and returns true if it is hot outside and if moneyInPocket is greater than 10.50.`)

//initialize two vars to gather weather conditions and money in pocket
isHotOutside = false
moneyInPocket = 35.50

//create function that takes a bool and number as params
function willBuyDrink(hot, money) {
    if (hot == true && money > 10.5) { //if statement to return true if it is hot outside and if money in pocket is greater than 10.5, false if either of those conditions are not met
        return true
    } else {
        return false
    }
}

console.log(`I will buy a drink: ${willBuyDrink(isHotOutside, moneyInPocket)}`)


console.log("-----------------------------------------------------------")
console.log(`Question 13: 

   Create a function of your own that solves a problem. In comments, write what the function does and why you created it.`)

//creating a function to take an array of objects including description, quantity and cost, and calculate subtotal, taxes and grand total. Return a description with all totals listed.

const neTaxRate = .0725 //set constant of tax rate

//initialize array of ojbects containing items, quantity and cost
let items = [{
    "description": "Antique Hutch",
    "quantity": 1,
    "cost": 150.25
},
{
    "description": "China Set",
    "quantity": 1,
    "cost": 55.75
},
{
    "description": "Vintage Napkins",
    "quantity": 12,
    "cost": 7.35
},
{
    "description": "Antique Water Pitcher",
    "quantity": 1,
    "cost": 35.75
}
];

//create function to loop through array of objects that takes in array and tax rate
function totals(items, taxRate) {
    let subtotal = 0; //initalize subtotal var
    let itemTotal = 0; //initialize itemtotal var
    for (let i = 0; i < items.length; i++) { //loop through items in array
        if (items[i].quantity > 1) { //if quantity value on an object is greater than 1, calculate the total cost of all units and add to subtotal
            itemTotal = items[i].cost * items[i].quantity
            subtotal += itemTotal
        }
        else {
            subtotal += items[i].cost; //if quantity is 1, add unit cost to subtotal
        }
    }

    let taxes = Math.round((subtotal * taxRate) * 100) / 100 //calculate and round tax amount

    let grandTotal = Math.round((subtotal + taxes) * 100) / 100 //calculate and round grand total which is subtotal + taxes

    //print out list of items including quanitity, description and cost with subtotal, taxes and grand total at bottom. Shows taxes in percentage instead of decimal for easy reading.
    console.log(`
Items: 
Quantity    |    Description    |    Unit Cost`)
    items.forEach((item, index) => {
        console.log(`${item.quantity}  |${item.description}    |${item.cost}`)
    })
    console.log(
        `Sub Total: ${subtotal}\n
Taxes: ${taxes} (Tax rate: ${(neTaxRate * 100).toFixed(2)}%)\n 
Grand Total: ${grandTotal}`)
}

//return function
totals(items, neTaxRate)