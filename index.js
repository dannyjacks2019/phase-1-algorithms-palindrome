const { consoleLog } = require("mocha/lib/reporters/base");

function isPalindrome(word) {
  for (let i = 0; i < word.length / 2; i++) {
    const j = word.length - 1 - i
    if (word[i] !== word[j]) return false
  // Write your algorithm here
}
return true
}

/* 
  Add your pseudocode here
if the first letter is the same as the last, the 2nd letter is the same as the 2nd to last and the 3rd is the same as the 3rd to last until the middle two letters are reached.. Starting from behinning to the modd;e each letter should from the beginning should correspond with the end. if the letters dont match return false.*/
/*
  Add written explanation of your solution here
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
  console.log("")

  console.log("expecting: false")
  console.log('=>', isPalindrome('abba'))

}

module.exports = isPalindrome;
