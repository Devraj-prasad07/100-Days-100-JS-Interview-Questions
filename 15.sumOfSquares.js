//* Write a function to calculate the sum of squares of all elements in an array. For example, given the array [1, 2, 3], the function should return 14 because 1*1 + 2*2 + 3*3 = 1 + 4 + 9 = 14.

// Example usage:
//? console.log(sumOfSquares([1, 2, 3])); // output: 14

// 1st Approach through For Loop
const sumOfSquares= (arr) => {
    let sum = 0;
    for(let i = 0; i < arr.length; i++){
        sum += arr[i] ** 2;
    }
    return sum;
}
console.log(sumOfSquares([1,2,3]));

// 2nd Approach through Reduce method
const sumOfSquare = (arr) => {
   return arr.reduce((prev,curr) => {
    return prev + curr ** 2;
    } , 0)
}
console.log(sumOfSquare([1,2,3]));