// Write a function findMax that takes an array of numbers as input and returns the maximum number in the array.

// LOGIC TO FIND THE MAX NO IN AN ARRAY USING LOOP
//? Start with the assumption that the first element of the array is the maximum value.
//? Iterate through the array starting from the second element.
//? Compare each element with the current maximum value.
//? If the current element is greater than the current maximum value, update the maximum value to be the   current element.
//? Continue this process until all elements in the array have been compared.
//? The final maximum value found is the maximum value in the array.

// 1st Approach Using For Loop !
const findMax = (arr) => {
  let maxNo = arr[0];

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > maxNo) {
      maxNo = arr[i];
    }
  }
  return maxNo;
};
console.log(findMax([1, 2, , 8, 3, 7, 9])); // Output 9
console.log(findMax([-10, -5, -7, -2, -1])); // Output -1
console.log(findMax([5])); // Output 5

// 2nd Approach Using Math.max() function !
const maxNo = (arr) => {
  return Math.max(...arr); // Used Spread Operator to destructure the array.
};
console.log(maxNo([1, 2, 8, 3, 7, 9])); // Output 9

// 3rd Approach Using Reduce() function
const findMaxNo = (arr) => {
  return arr.reduce((prev, curr) => {
    return curr > prev ? curr : prev;
  }, 0);
};
console.log(findMaxNo([1, 2, 8, 3, 7, 9]));