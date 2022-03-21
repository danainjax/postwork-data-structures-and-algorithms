function reverseString(str) {
  let newString = ''
  for (let index = str.length - 1; index >= 0; index--) {
    newString += str[index]
  }
  return newString
}

// NOTES:
// solve using iteration, no built in methods
// 1 . initialize an empty string to store the newString
// 2. start a for loop with the index equal to the string's length - 1, while the index is  greater than or equal to zero (condition), we decrement the index
// 3. return the newString
// So, that means if we input a string "danaisthebest", the length of the string is 13. We start with the string's index of 13 -1, or 12.
// string[12] would give us the last letter in the string 't', then we add the 't' to the newString variable we are storing
// on the next iteration the index is decremented to 11. That is the 's', we add the 's' to the newString var and we now have stored, 'ts', and so on until we have danaisthebest reversed : 'tsebehtsianad'

if (require.main === module) {
  // add your own tests in here
  console.log("Expecting: 'ih'")
  console.log('=>', reverseString('hi'))

  console.log('')

  console.log("Expecting: 'ybabtac'")
  console.log('=>', reverseString('catbaby'))
}

module.exports = reverseString

// Please add your pseudocode to this file
// And a written explanation of your solution
