"use strict";

(function () {
  // Question 1

  // Write a function named remainder  that will accept two arguments and return the remainder of a division between the two values (the first divided by the second). If either argument is not a number, the function should return false .
  // Consider the following test cases:

  function remainder(x, y) {
    if (typeof x === "number" && typeof y === "number") {
      return console.log(x % y);
    } else {
      return console.log(false);
    }
  }
  remainder(21, 7); // returns 0
  remainder(-34, 3); // returns -1
  remainder(144, -11); // returns 1
  remainder(-14, "2"); // returns false
  remainder("36", 9); // returns false
  remainder("44", "-3"); // returns false
  remainder("Jeff", "Geoff"); // returns false
  remainder(false, true); // returns false
  remainder(); // returns false

  console.log("------------------");
  // Question 2
  // Write a function named containsAce  that takes in an argument and returns true  if the argument passed is a string that contains the sequence of characters "ace"  somewhere within the string. This check should be case insensitive. The function should return false if the argument is not a string, or if it doesn't contain "ace"  somewhere in the string.

  // Consider the following test cases:

  function containsAce(x) {
    if (typeof x === "string" && x.toLowerCase().includes("ace")) {
      return console.log(true);
    } else {
      return console.log(false);
    }
  }

  // JavaScript Fundamentals Assessment Review
  containsAce("place"); // returns true
  containsAce("ACE Hardware"); // returns true
  containsAce("PaLaCe!1!"); // returns true
  containsAce("camel"); // returns false
  containsAce("CACHE"); // returns false
  containsAce("phase 1"); // returns false
  containsAce("bass"); // returns false
  containsAce(["a", "c", "e"]); // returns false
  containsAce(135); // returns false
  containsAce(true); // returns false
  containsAce(); // returns false

  console.log("------------------");

  // Question 3
  // Write a function named divisibleBy5  that accepts an argument returns true  is the
  // argument a number that is evenly divisible by 5. If the argument provided is either not a number, or is not evenly divisibile by 5, the function should return false .

  function divisibleBy5(x) {
    if (typeof x === "number" && x % 5 === 0) {
      return console.log(true);
    } else return console.log(false);
  }
  // Consider the following test cases:
  divisibleBy5(255); // returns true
  divisibleBy5(-100); // returns true
  divisibleBy5(5); // returns true
  divisibleBy5(0); // returns true
  divisibleBy5("80"); // returns false
  divisibleBy5(6); // returns false
  divisibleBy5(-99); // returns false
  divisibleBy5(false); // returns false
  divisibleBy5([5, 10, 15]); // returns false
  divisibleBy5(); // returns false

  console.log("------------------");

  // Question 4
  // Write a function named averageThreeNumbers  that accepts three arguments, and returns the average (mean) of the three arguments if all three arguments are numbers. If any/all of the three arguments are not a number, or if there are fewer than three arguments, the function should return false .

  function averageThreeNumbers(x, y, z) {
    if (
      typeof x === "number" &&
      typeof y === "number" &&
      typeof z === "number"
    ) {
      return console.log((x + y + z) / 3);
    } else return console.log(false);
  }

  
  // Consider the following test cases:
  averageThreeNumbers(10, 5, 15); // returns 10
  averageThreeNumbers(19, 44, -8); // returns 18.333333333333332
  averageThreeNumbers("two", 3, 1); // returns false
  averageThreeNumbers(2, "3", 1); // returns false
  averageThreeNumbers(6, 7, "8"); // returns false
  averageThreeNumbers("duck", "duck", "goose"); // returns false
  averageThreeNumbers(true, false, true); // returns false
  averageThreeNumbers(22, 24); // returns false
  averageThreeNumbers(); // returns false

  console.log("------------------");
  
  // Question 5
  // Write a function named stringsAreSameLength  that accepts two arguments and returns
  // true  if both arguments are strings of the same length. If either argument is not a string, has fewer than two arguments, or if the two strings are of different lengths, the function should return false .

  function stringsAreSameLength(x , y) {
    if (typeof x === "string" && typeof y === "string" && x.length == y.length){
      return console.log(true)
    } else return console.log(false)
  }

  // Consider the following test cases:
  stringsAreSameLength("duck", "code") // returns true
  stringsAreSameLength("Buick", "CAMEL") // returns true
  stringsAreSameLength("ERROR_404", "file-miss") // returns true
  stringsAreSameLength("ERROR_CODE", "1234567890") // returns true
  stringsAreSameLength("Oops", 1234) // returns false
  stringsAreSameLength(22, "huh...") // returns false
  stringsAreSameLength("Camel", "Case") // returns false
  stringsAreSameLength(81,34) // returns false
  stringsAreSameLength("ace", [1,2,3]) // returns false
  stringsAreSameLength("fisherman") // returns false
  stringsAreSameLength(); // returns false
  
  
})();
