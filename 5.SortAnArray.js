//*------------------------------------------
//* Programming Question: Sort an Array
//*------------------------------------------

//? Write a function to sort an array of numbers in an ascending order.

// Example Usage:
// console.log(sortAnArray([5,3,1,8])); // Output: [1,3,5,8]

// Todo Requirements:

//? The function should take an array of numbers as input.
//? It should return a new array with the numbers sorted in ascending order.
//? The original array should remain unchanged.
//? You are not allowed to use the built-in-sort() method.

// 1st Approach
const sortAnArray = (arr) => {
  arr.sort((a, b) => a - b);
  return arr;
};
console.log(sortAnArray([5, 3, 1, 8, 10, 20, 100]));

// 2nd Approach
function sort(arr) {
  const len = arr.length;
  for (let i = 0; i < len - 1; i++) {
    for (let j = 0; j < len - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
      }
    }
  }
  return arr;
}
console.log(sort([5, 3, 1, 8, 10, 20, 100]));
