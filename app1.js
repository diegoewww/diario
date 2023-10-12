/**Given a string containing digits from 2-9 inclusive, return all possible letter combinations that the number could represent. Return the answer in any order.

A mapping of digits to letters (just like on the telephone buttons) is given below. Note that 1 does not map to any letters.

Example 1:

Input: digits = "23"
Output: ["ad","ae","af","bd","be","bf","cd","ce","cf"]
Example 2:

Input: digits = ""
Output: []
Example 3:

Input: digits = "2"
Output: ["a","b","c"]
 

Constraints:

0 <= digits.length <= 4
digits[i] is a digit in the range ['2', '9']. */


/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function(digits) {

  if(digits.length === 0){
      return []
  }

  const phone_number = ["abc","def","ghi","jkl","mno","pqrs","tuv","wxyz"]
  const output = []
  backtrack("", digits,phone_number,output)
  return output;

  function backtrack(conbination, next_digits , phone_number,output){
      if (next_digits.length === 0) {
          output.push(conbination);
      }else{
          const leters =  phone_number[next_digits[0] - 2]
          for (const leter of leters){
              backtrack(conbination+leter,next_digits.slice(1),phone_number,output)
          }

      }
  }
}