//* Write a function called isPowerOfTwo that takes an integer num as input and returns true if num is a power of two, and false otherwise.

// Example Usage
//? console.log(isPowerOfTwo(8)); // Output: true
//? console.log(isPowerOfTwo(7)); // Output: false

// Note:
//? The input num will be an postive integer.
//? Zero (0) and negative integers are not considered powers of two.
//? The function should return true if the given number is a power of 2.

const isPowerOfTwo = (num) => {
  if (num < 0 || num === 0) {
    return "Please Enter Positive integer";
  }
  let op = false;
  for (let i = 0; i < num; i++) {
    if (2 ** i === num) {
      op = true;
    }
  }
  return op;
};
console.log(isPowerOfTwo(4));
console.log(isPowerOfTwo(7));
