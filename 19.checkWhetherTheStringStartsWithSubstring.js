//* Write a function to check if a given string starts with a specific substring.

//? str: A string (e.g., "Hello world").
//? substr: A substring to check if it starts the given string (e.g., Hello").
//? Output: true if the given string starts with the specified substring, otherwise false.


const substring = (str,substr) => {
    return str.toLowerCase().startsWith(substr.toLowerCase());
}
 
// * OUTPUT
console.log(substring("Hello world", "hello")) // true
console.log(substring("Hello world", "World")) // false