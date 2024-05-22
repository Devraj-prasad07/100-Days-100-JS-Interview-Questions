// ? -------------------------------------------------------------------
// Write a function to check whether the letter is upperCase or lowerCase.
// ? -------------------------------------------------------------------

// Constraints:
// * The input Character should be a single character.
// * The character can be any printable ASCII character.
// * You can assume that the input will always be a string of length 1.

const checkLetter = (str) => {
    if (str.length !== 1) {
        return "Please give a single character";
    }
    if (!/[a-zA-Z]/.test(str)) {
        return "Please give a letter";
    }
    if (str === str.toUpperCase()) {
        return `${str} is uppercase`;
    } else if (str === str.toLowerCase()) {
        return `${str} is lowercase`;
    }
}

// Example usage:
console.log(checkLetter('A')); // "A is uppercase"
console.log(checkLetter('a')); // "a is lowercase"
console.log(checkLetter('1')); // "Please give a letter"
console.log(checkLetter('')); // "Please give a single character"
console.log(checkLetter('Aa')); // "Please give a single character"


