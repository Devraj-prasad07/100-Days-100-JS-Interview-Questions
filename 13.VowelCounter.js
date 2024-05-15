//* Write a function called count_vowels that takes a string as input. The function should count the number of vowels (a, e, i, o, and u) in the string, considering both uppercase and lowercase letters. The function should return a non-negative integer representing the total number of vowels found.

// Here are some additional details to consider:
//? The input string may contain characters other than letters, such as numbers and punctuation. These characters should not be counted as vowels.
//? The function should be case-insensitive, meaning it should treat uppercase and lowercase vowels the same.

// Examples:
//? count_vowels("Helloo world") should return 4 (o, o, and e)
//? count_vowels("ThE quIck brown fOx") should return 5 (e, u, i, i, and o)
//? count_vowels("Brrrp") should return 0 

const countVowels = (str) => {
  let vowels = ["a", "e", "i", "o", "u"];
  let vowelCount = 0;
  str = str.toLowerCase();
  let arr = str.split("");
  for (let i = 0; i < arr.length; i++) {
    if (vowels.includes(arr[i])) {
      vowelCount++;
    }
  }
  return vowelCount;
};

console.log(countVowels("Helloo world")); // 4
console.log(countVowels("ThE quIck brOwn fOx")); // 5
console.log(countVowels("Brrrp")); // 0