// ? write a function to reverse a string without using any built-in methods or libraries. The function should take a string as input and return the reversed string.

const reverseString = (str) => {
    let string = "";
    for(let i = str.length - 1; i >= 0; i--){
        string += str[i]; 
    }
    return string;
}

console.log(reverseString("hello"));
