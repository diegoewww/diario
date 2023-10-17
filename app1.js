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

console.log("hola")