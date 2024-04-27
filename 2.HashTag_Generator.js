// Programming Question: Hash Tag Generator

//? You are required to implement a function generateHash that generates a hash tag from a given input string . The hash tag should be constructed as follows

//? The input string should be converted to a hash tag format ,where each word is capitalized and concatenated together without spaces.
//?  If the length of the input string is greater than 280 characters or if the input string is empty or contains only whitespaces , the function should return false.
//? otherwise , the function should return the generated hash tag prefixed with #.

//* Write a function generateHash to accomplish this task.

const hashTagGenerator = (string) => {
  if (string.length > 280 || string.trim().length === 0) {
    return false;
  }
  let words = string.split(" ");
  words = words.map((currEle) =>
    currEle.replace(currEle[0], currEle[0].toUpperCase())
  );
  words = `#${words.join("")}`
  return words;
};

console.log(hashTagGenerator("i am devraj"));
