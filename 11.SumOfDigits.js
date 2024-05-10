//* Write a function that takes a number as input and returns the sum of its digits.

// Example
//? console. log (sum0fDigits(4321)); // Output: 10
//? console. log (sum0fDigits (123456)); // Output: 21

// Constraints:
//? The input number will alvays be a positive integer.
//? The input number can have multiple digits.
//? The output should be the sum of all the digits in the input number.

// HomeWork
//?  This function calculates the sum of digits without converting the number to a string.

// 1st Approach
const sumOfDigits = (num) => {
    let str = num.toString();
    let arr = str.split("").map(Number);
    let sum = 0;
    for(let i = 0; i < arr.length; i++){
         sum += arr[i]; 
    }
    return sum;
}
console.log(sumOfDigits(12345)); // 15
console.log(sumOfDigits(987654321)); // 45

