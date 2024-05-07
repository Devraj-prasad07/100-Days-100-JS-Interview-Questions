// Challenge: Calculate the Average

// Write a function called calculateAverage that takes an array of numbers as input and returns the average of those Numbers.

// Your function should:
//? Accept an array of numbers as input.
//? Calculate the sum of all the numbers in the array.
//? Divide the sum by the total number of elements in the array to find the average.
//? Return the calculated average.

// Example Usage:
//?console.log(calculateAvg([5,10,2,8])); //  Output = 6.25

// 1st Approach Using Reduce Method.
const calculateAvg = (arr) => {
  let avg = arr.reduce((prev, curr) => prev + curr, 0);
  return avg / arr.length;
};
console.log(calculateAvg([5, 10, 2, 8]));

// 2nd Approach Using For Loop.
const calculateavg = (arr) => {
   let result = 0;
   for(let i = 0 ; i < arr.length; i++){
    result += arr[i];
   }
   return result / arr.length;
  };
  console.log(calculateavg([5, 10, 2, 8]));