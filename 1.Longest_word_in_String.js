// Programming Question : Longest Word in a String 🤓

// Q: Write a function findLongestWord that takes a string as input and returns the longest word in the string.If there are multiple longest words, return the first one encountered. 😋

// CONSTRAINTS:
// The input string may contain alphabetic characters ,digits ,spaces and punctuation.
// The input string is non-empty
// The input string may contain multiple words separated by spaces.

// NOTE:
// If the input string is empty or contains only whitespace, the function should return an false
// The function should ignore leading and trailing whitespace when determining the longest word.

// 1st Approach
const findLongestWord = (string) => {
  if (string.trim().length === 0) {
    return false;
  }
  let words = string.split(" ");
  words = words.sort((a, b) => b.length - a.length);
  return words[0];
};

console.log(findLongestWord("Hi My Name Is Devraj Prasad"));

// 2nd Approach
const findlongestWord = (string) => {
  if (string.trim().length === 0) {
    return false;
  }
  let words = string.split(" ");
  words = words.sort((a, b) => a.length - b.length);
  let longestWord = words[words.length - 1];
  return longestWord;
};

console.log(findLongestWord("Hi I Am Devraj Prasad"));
