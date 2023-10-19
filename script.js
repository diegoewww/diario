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

Array.prototype.myMap = function (cb) {
  let temp = []
  for(let i = 0; i < this.length;i++){
    temp.push(cb(this[i], i , this))
  }
  return temp
}

Array.prototype.myFilter = function(cb){
  let temp = []
  for (let i = 0; i < this.length; i++) {
    if(cb(this[i], i , this)) temp.push(this[i])
  }
  return temp;
}

Array.prototype.myReduce = function(cb,initialValue){
  let accumulator = initialValue
  for (let i = 0; i < this.length; i++) {
      accumulator = accumulator? cb(accumulator,this[i],i,this) : this[i]
  }
  return accumulator
}

const nums = [1,2,3,4]

const multiplyTwo =nums.myMap((num,i,arr)=>{
  return num*2
} )

const moreThanTwo = nums.myFilter((num)=>{
  return num > 2
})

const sum = nums.myReduce((acc,num)=>{
  return acc + num
},0)

const resultMap = nums.map(num=>{
  return num+2
})

const resultForEach = nums.forEach(num=>{
  return num+3
})

// console.log(multiplyTwo)
// console.log(moreThanTwo)
// console.log(sum)
// console.log(nums)
// console.log(resultMap)
// console.log(nums)
// console.log(resultForEach);

const students = [
  {name:"Piyus", rollNumber:12, marks:80},
  {name:"Diego", rollNumber:10, marks:50},
  {name:"Alex", rollNumber:60, marks:30},
  {name:"Apex", rollNumber:25, marks:110},
]

const names =[]

function addName(){
  for(let i=0; i<students.length ;i++){
    names.push(students[i].name.toUpperCase())
  }
  return names
}

const mapNames = students.map(student=>{
  return student.name.toUpperCase()
})

const moreThan60Marks = students.filter((student)=>{
  return student.marks > 60 && student.rollNumber > 15
})

const sumOfMarks = students.reduce((acc,student)=>{
  return acc + student.marks
},0)

const namesfiltered = students.filter(student=>{
  return student.marks >60
}).map(element =>{
  return element.name
})

const totalMarks = students.map(student =>{
  if(student.marks <60){
    student.marks +=20
  }
  return student
}).filter(student => student.marks >60)
  .reduce((acc,student)=> acc + student.marks,0)

// PREPARACION PARA FAANG AHORA!

// Palindrome

const isPalindrome = function (x) {
  if(x<0) return false
  return x === Number(x.toString().split("").reverse().join(""));
};

// Fibonacci 

const fibonacci = function (num) {
  let arr = [0,1]
  for(let i = 2; i <= num; i++){
    arr.push(arr[i-1] + arr[i-2])
  }
  return arr[num]
}

// Fibonacci  recursive

const fibonacciRecursive = function (num) {
  if(num <= 1) return num

  return fibonacciRecursive(num-1) + fibonacciRecursive(num-2)
}

// Valid Anagram 1

const isAnagram = function (s,t) {
  s = s.split("").sort().join("")
  t= s.split("").sort().join("")
  
  return s === t
}

// Valid Anagram 2

const isAnagram2 = function (s,t) {
  if(s.length !== t.length) return false

  const obj1 = {}
  const obj2 = {}

  for (let i = 0; i < s.length; i++) {
  
    obj1[s[i]] = (obj1[s[i]] || 0) + 1
    obj2[t[i]] = (obj2[t[i]] || 0) + 1

  }
  for (const key in obj1) {
    if(obj1[key] !== obj2[key]) return false
  }
  return true

}

// Two Sum 1

const sumTwoforce = function (arr,target) {
  
}

// Two Sum 2

const twoSum = function (arr,target) {
  let obj={}

  for(let i = 0; i< arr.length; i++){
    let n = arr[i]
    if(obj[target-n] >=0){
      return [obj[target-n], i]
    }else{
      obj[n] = i
    }
  }
}

// Q5 Best time to buy and Sell stocks

function maxProfit1(arr) {
  let globalProfit = 0

  for(let i = 0; i< arr.length-1; i++){
    for(let j = i+1; j< arr.length; j++){
      const currentProfit = arr[j] - arr[i]
      if(currentProfit > globalProfit){
        globalProfit = currentProfit
      } 
    }
  }
  return globalProfit

}

function maxProfit2(arr){
  
}





























