// Write a function to determine whether a given string is a palindrome or not. A palindrome is a word , phrase , number or other sequence of characters that reads the same forward and backward, ignoring spaces , punctuation and capitalization.

//? ---------------------------------------
// Constraints:
//? ---------------------------------------

// The input string may contain letters,digits,spaces,punctuation, and special characters.
// The function should be case-insensitive, meaning "Racecar" and "racecar" should be considered the same.
// Ignore spaces, punctuation, and special characters when determining if a string is a palindrome.
// The function should return true if the input string is a palindrome and false otherwise.


const isPalindrome = (str) => {
    str = str.toLowerCase().replace(/\W/g,"") // Used Regex(Regular Expression)
    let r_str = str.split("").reverse().join("");

    // if(str === r_str){
    //     return true;
    // } else {
    //     return false;
    // }

    // OR

    return str === r_str ? true : false;
}

console.log(isPalindrome("racecar"));
console.log(isPalindrome("Cigar? Toss it in a can. It is so tragic."));