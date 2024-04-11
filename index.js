function isPalindrome(word) {
  // Write your algorithm here
  reversedString = word.split('').reverse().join('')
  return word === reversedString ? true : false
  
}

/* 
  Add your pseudocode here
  The function takes a string input of lower case letters 
  the code will reaarange the string input and make a backwards version 
  example: robot will become tobor
  if the reaaranged word is exactly the same as the the initial string input
  then the function will return a boolean of true
  if it is false then it will return the boolean false
*/

/*
  Add written explanation of your solution here
  racecar will be true
  robot will be false
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
