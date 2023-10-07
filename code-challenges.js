// ASSESSMENT 1: Coding Practical Questions

// To run file: navigate to the correct directory in terminal, $ node code-challenges.js

// Pseudo coding your process is required.

// --------------------INSTRUCTOR EXAMPLE: Create a function that takes in two strings and determines which of the two strings has more characters. Use the two sets of test variables provided.

// Set one:
// const fruit1 = "apple"
// const fruit2 = "banana"
// Expected outcome: "banana"

// Set two:
// const fruit3 = "cherry"
// const fruit4 = "kiwi"
// Expected outcome: "cherry"

// Pseudo code:

// 1.) Declare a function to take in two strings.

// const stringRuler = (string1, string2) => {

// 2.) Use a method to compare the strings by their length.

//     if(string1.length > string2.length) {
//         return string1
//     } else {
//         return string2
//     }  
// }

// console.log(stringRuler(fruit1, fruit2))
// console.log(stringRuler(fruit3, fruit4))


// --------------------1) Create a function that takes in a number and determines if the given number is below boiling point, at boiling point, or above boiling point. Boiling point is 212 degrees Fahrenheit. Use the test variables provided below.


// const temperature1 = 42
// Expected output: "42 is below boiling point"

// const temperature2 = 350
// Expected output: "350 is above boiling point"

// const temperature3 = 212
// Expected output: "212 is at boiling point"

// Pseudo code:

// 1.) Create the function that takes in a number 

// const boilingPoint = (num) => {
//     if(num < 212) {
//         return `${num} is below boiling point`
//     } else if (num > 212) {
//         return `${num} is above boiling point`
//     } else {
//         return `${num} is at boiling point`
//     }
// } 

// console.log(boilingPoint(temperature1))
// console.log(boilingPoint(temperature2))
// console.log(boilingPoint(temperature3))

// --------------------2) Create the code that will combine the two arrays and return the length using the test variables provided below.

// Pseudo code:

// const padres1984WorldSeriesRuns = [2, 5, 2, 2, 4]
// const padres1998WorldSeriesRuns = [6, 3, 5, 3]
// Expected output: 9
     
// console.log(padres1984WorldSeriesRuns.concat(padres1998WorldSeriesRuns).length)



// --------------------3) Create the code that will reverse the letters of a string using the test variable provided below.

// Pseudo code:

// const currentCohort = "Delta 2023"
// Expected output: "3202 atleD"

// console.log(currentCohort.split("").reverse().join(""))


// --------------------4) Create the code that will return the last index of the given value from the array using the test variables provided below.

// Pseudo code:

// const numberOfConnections = [13, 34, 42, 5, 5, 10, 27, 42, 10]

// const givenValue1 = 42
// Expected output: 7

// const givenValue2 = 10
// Expected output: 8

// console.log(numberOfConnections.lastIndexOf(givenValue1))
// console.log(numberOfConnections.lastIndexOf(givenValue2))

// --------------------5) Create the code that will sort all the numbers in an array from largest to smallest. Use the test variables provided below.

// Pseudo code:

// const sanDiegoSummerTemperatures = [79, 80, 72, 73, 82, 77, 76]
// Expected output: [82, 80, 79, 77, 76, 73, 72]

// const sanDiegoWinterTemperatures = [59, 68, 62, 59, 66, 67, 66]
// Expected output: [68, 67, 66, 66, 62, 59, 59]

// console.log(sanDiegoSummerTemperatures.concat(sanDiegoWinterTemperatures).sort().reverse())