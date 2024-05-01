//*------------------------------------------------------
// Interview Question : Count Occurences of Character
//*------------------------------------------------------

//! Task:
//? Write a function called countChar that takes two parameters: a string and a character to count. The function should return the number of times the specified character appears in the string.

// todo Constraints
//? The function should be case-sensitive.
//? The function should handle both lowercase and uppercase characters.
//? The character parameter can be printable ASCII character function should accept any character that is part of the ASCII character set and is printable.

const countChar = (string,charCount) => {
    string = string.toLowerCase();
    charCount = charCount.toLowerCase();

    totalChar = string.split("").reduce((previous,current) => {
        if (current === charCount){
            previous++;
        }
        return previous
    },0);
    return totalChar;
}

console.log(countChar("MissIssipi","I"));