//?---------------------------------------------------------------------
// Coding Challenge: Find the Minimum Value in an Array
//?---------------------------------------------------------------------

// Write a function findMin that takes an array of numbers as input and returns the minimum value found in the array.

//? Constraints
//* The input array may contain both positive and negative integers.
//* The input array may be empty.
//* The input array may contain duplicates values.

// 1st Approach Using For Loop.
const findMin = (arr) => {
  let minNo = 0;
  for (let i = 0; i < arr.length; i++) {
    if (minNo > arr[i]) {
      minNo = arr[i];
    }
  }
  return minNo;
};

console.log(findMin([1, 2, 3, 4, -7, 0, -2]));

// 2nd Approach Using Map method.
const findmin = (arr) => {
  let minNo = 0;
  arr.map((num) => (minNo > num ? (minNo = num) : (minNo = minNo)));
  return minNo;

  //   -------------------------------- OR ------------------------------

  arr.map((num) => {
    if (minNo > num) {
      minNo = num;
    }
  });
  return minNo;
};
console.log(findmin([1, 2, 3, 4, -7, 0, -2]));

// 3rd Approach Using Reduce Method

const findMinNo = (arr) => {
  return arr.reduce((prev, curr) => {
    return prev < curr ? prev : curr;
  }, 0);
};

console.log(findMinNo([1, 2, 3, 4, -7, 0, -2]));