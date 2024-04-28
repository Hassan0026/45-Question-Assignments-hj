// More Conditional Tests: You don’t have to limit the number of tests you create to 10. If you want to try more comparisons, write more tests. Have at least one True and one False result for each of the following:
// • Tests for equality and inequality with strings
// • Tests using the lower case function
// • Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to
// • Tests using "and" and "or" operators
// • Test whether an item is in a array
// • Test whether an item is not in a array
//test for equality and inequality
var string1 = "hello";
var string2 = "world";
console.log(string1 === string2); // False
console.log(string1 !== string2); // True
// • Tests using the lower case function
var originalString = "HELLO";
var lowerCaseString = originalString.toLowerCase();
console.log(lowerCaseString === "hello"); // True
console.log(lowerCaseString !== "hello"); // False
// • Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to
var num1 = 10;
var num2 = 5;
console.log(num1 === num2); //False
console.log(num1 !== num2); //True
console.log(num1 > num2); // True
console.log(num1 < num2); // False
console.log(num1 >= num2); // True
console.log(num1 <= num2); // False
// • Tests using "and" and "or" operators
var condition1 = true;
var condition2 = false;
console.log(condition1 && condition2); // False
console.log(condition1 || condition2); // True
// • Test whether an item is in a array
// • Test whether an item is not in a array
var myArray = ["apple", "banana", "cherry"];
var itemToCheck2 = "grape";
console.log(myArray.includes(itemToCheck2));
console.log(myArray.includes("banana"));
