// Question:
//* Write a function arraysAreEqual that takes two arrays arr1 and arr2 as input and returns true if the arrays are equal (i.e., contain the same elements in the same order), and false otherwise.

// Example usage:
//? console. log (arraysAreEqual([1, 2, 31], [1, 2, 3])); // Output: true
//? console. log(arraysAreEqual([1, 2, 3], [1, 2, 4])); // Output: false
//? console. log(arraysAreEqual([], [])); // Output: true

// Note:
//? The function should return false if the arrays have different lengths.
//? The function should compare each element of arr1 with the corresponding element in arr2.
//? The function should return true only if all elements in arr1 are equal to their corresponding elements in arr2.

// Approach 1 using for loops
const arraysAreEqual = (arr1, arr2) => {
  if (arr1.length === arr2.length) {
    for (let i = 0; i < arr1.length; i++) {
      if (arr1[i] !== arr2[i]) {
        return false;
      }
    }
    return true;
  } else {
    return false;
  }
};
console.log(arraysAreEqual([1, 2, 3], [1, 2, 3])); //True

// Modified Approach 1
const ArraysAreEqual = (arr1, arr2) => {
  if (arr1.length !== arr2.length) {
    return false;
  }
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      return false;
    }
  }
  return true;
};
console.log(ArraysAreEqual([1, 2, 5], [1, 2, 3])); // False

// Approach 2 Using Every Method
const checkEqualArr = (arr1,arr2) => {
    if (arr1.length !== arr2.length){
        return false
    }
    return arr1.every((currValue,indexValue) => currValue === arr2[indexValue])
}
console.log(checkEqualArr([],[])); // True

//! The every() method is a higher-order function in JavaScript that is used to test whether all elements in an array pass a provided test function. It returns a boolean value: true if all elements pass the test, otherwise false.
//? array.every(callbackFunction(element, index, array), thisArg)

//* callbackFunction: A function that is called for each element in the array. It takes three arguments:
//* element: The current element being processed in the array.
//* index (optional): The index of the current element being processed.
//* array (optional): The array that every() was called upon.
//* thisArg (optional): A value to use as this when executing the callback function.
//* The every() method executes the callback function once for each element in the array, until it finds an element for which the callback returns a falsy value. If such an element is found, every() immediately returns false. If the callback returns a truthy value for every element, every() returns true.