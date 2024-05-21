//*----------------------------
// Coding Challenge
//*----------------------------

// Write a function to convert a string to camelCase & snake_case.

// Example Usage:
// console.log(toCamelCase("hello im devrAj"));

const toCamelCase = (str) => {
  return str
    .trim()
    .split(" ")
    .map((currEle, index) => {
      if (index === 0) {
        return currEle.toLowerCase();
      } else {
        return currEle.charAt(0).toUpperCase() + currEle.slice(1).toLowerCase();
      }
    })
    .join("");
};
// console.log(toCamelCase("hello im devrAj"));

const toSnakeCase = (str) => {
    return str.trim().toLowerCase().split(' ').filter(word => word).join("_")
}

console.log(toSnakeCase("hi Devraj"));