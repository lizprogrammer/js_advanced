// Setup
var testString = "There are 3 cats but 43 dogs and 15 buffalo.";

// Only change code below this line.

var expression = /\d+/g;  // Change this line

// Only change code above this line

// This code counts the matches of expression in testString
var digitCount = testString.match(expression).length;
print(testString.match(expression));
print(digitCount);