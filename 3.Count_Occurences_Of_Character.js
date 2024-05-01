//*------------------------------------------------------
// Interview Question : Count Occurences of Character
//*------------------------------------------------------

//! Task:
//? Write a function called countChar that takes two parameters: a string and a character to count. The function should return the number of times the specified character appears in the string.

// todo Constraints
//? The function should be case-sensitive.
//? The function should handle both lowercase and uppercase characters.
//? The character parameter can be printable ASCII character function should accept any character that is part of the ASCII character set and is printable.

const countChar = (string, charCount) => {
  string = string.toLowerCase();
  charCount = charCount.toLowerCase();

  totalChar = string.split("").reduce((previous, current) => {
    if (current === charCount) {
      previous++;
    }
    return previous;
  }, 0);
  return totalChar;
};

console.log(countChar("MissIssipi", "I"));

// How Reduce Fn Works
let arr = ["a", "b", "c", "d", "e", "f", "e", "e", "e"];
let char = arr.reduce((prev, curr) => {
  console.log(`curr : ${curr}`);
  if (curr === "e") {
    prev++;
    console.log(`prev 1 : ${prev}`);
  }
  return prev;
}, 0);
console.log(char);
