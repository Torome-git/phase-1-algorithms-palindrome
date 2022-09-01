function isPalindrome(word) {
  // Write your algorithm here
  let reversedWord = word.split("").reverse().join("");
	return word === reversedWord;
}

/* 
  Add your pseudocode here
  initializing a variable to store the reversed word
  split the word into an array
  reverse the array
  join the array into a string
  compare the word to the reversed word
  return true if they are the same
  return false if they are not the same
*/

/*
  Add written explanation of your solution here
  Add written explanation of your solution here
  1. Split the word into an array of letters
  2. Reverse the array
  3. Join the array back into a string
  4. Compare the original word to the reversed word
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
