// Import the Underscore package
const _ = require('underscore');

/**
 * Print out the result if ["Java", "Javascript", "Typescript"] this array 
 * contains "Java"
 */
// First Answer 
const array = ["Java", "Javascript", "Typescript"];
const array1= _.contains(array, "Java");
console.log(array1);


/**
 * Print out the result if ["Java", "Javascript", "Typescript"] this array 
 * contains "C++"
 */
// Second Answer
const array2= _.contains(array, "C++");
console.log(array2);