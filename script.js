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
// Ques 1 - Palindrome Number
// An integer is a palindrome when it reads the same forward and backward.

// Input: x = 121  ----->>>>>   Output: true
// Input: x = 10   ----->>>>>   Output: false
// console.log(isPalindrome(121));
// Palindrome

const isPalindrome = function (x) {
  return  x < 0 ? false : x === Number(x.toString().split("").reverse().join(""))
};



// Ques 2 - Fibonacci Number
// Fibonacci Series -> 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233...
// F(0) = 0, F(1) = 1
// F(n) = F(n - 1) + F(n - 2), for n > 1

// Input: n = 3  ----->>>>>  Output: 2

const fibonacci = function (num) {
  let arr = [0,1]
    if(num>1){
      for (let i = 2; i <= num; i++) {
        arr.push(arr[i-2] + arr[i-1])
      }

    }
  return arr[num]
}


// Fibonacci  recursive

const fibonacciRecursive = function (num) {

  let arr = [0,1]
  if(num>1){
    return fibonacciRecursive(num-2) + fibonacciRecursive(num-1)
  }

  return arr[num]

}


// Ques 3 - Valid Anagram
// An Anagram is a word or phrase formed by rearranging the letters of
// a different word or phrase, using all the original letters exactly once.

// Input: (s = "anagram"), (t = "nagaram"); ----->>>>>   Output: true;
// Input: (s = "rat"), (t = "car");         ----->>>>>   Output: false;

// Valid Anagram 1

const isAnagram1 = function (s,t) {
  s = s.split("").sort().join("")
  t = t.split("").sort().join("")

  return s === t
}
// Valid Anagram 2

const isAnagram2 = function (s,t) {

  let obj1 = {}
  let obj2 = {}

  for(let i = 0; i<s.length; i++){
    obj1[s[i]] = (obj1[s[i]] || 0 ) + 1
    obj2[t[i]] = (obj2[t[i]] || 0 )  + 1
  }

  for (const key in obj1) {
    if(obj1[key] != obj2[key]) return false
  }

  return true

}
// Ques 4 - Two Sum
// Given an array of integers nums and an integer target,
// return indices of the two numbers such that they add up to target.

// Input: nums = [2,7,11,15], target = 9
// Output: [0,1] (Because nums[0] + nums[1] == 9, we return [0, 1])
// Input: nums = [3, 2, 4], target = 6
// Output: [1, 2]


// Brute Force Solution

const twoSum1 = function (arr,target) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = i+1; j < arr.length; j++) {
      if(arr[i]+ arr[j] === target){
        return [i,j]
      }
    }
  }
  return []
}

// console.log(twoSum1([3, 2, 4], 6));

// Using JS Objects

const twoSum2 = function (arr,target) {
  let obj ={}
  for (let i = 0; i < arr.length; i++) {
    if (obj[target - arr[i]] >=0) {
      obj[arr[i]] = i
      return [obj[target - arr[i]], i]
    } else {
      obj[arr[i]] = i
    }
  }
  return []
}

// console.log(twoSum2([3, 2, 4], 6));



// Ques 5 - Best Time to Buy and Sell Stocks
// You are given an array prices where prices[i] is the price of a given stock
// on the ith day.
// You want to maximize your profit by choosing a single day to buy one stock
// and choosing a different day in the future to sell that stock.
// Return the maximum profit, If you cannot achieve any profit, return 0.

// Input: prices = [7, 1, 5, 3, 6, 4];  ----->>>>>  Output: 5;
// Input: prices = [7, 6, 4, 3, 1];     ----->>>>>  Output: 0;

// Brute Force Solution

function maxProfit1(arr) {
  let profitResultante = 0
  for (let i = 0; i < arr.length-1 ; i++) {
    for (let j = i+1; j < arr.length ; j++) {
      const profitOperacional = arr[j] - arr[i]
      if(profitOperacional > profitResultante) {
        profitResultante = profitOperacional
      }
    }
  }
  return profitResultante
}


function maxProfit2(arr){
  let minimo = arr[0] || 0;
  let profit = 0;

  for (let i = 1; i < arr.length; i++) {
    if(arr[i] < minimo){
      minimo = arr[i]
    }
    profit = Math.max(profit, arr[i] - minimo)
  }
  return profit
}

// 30 days javaScript

function createCounterFun(init){
  let counter = init

  function add(){
    return ++counter;
  }

  function decrement(){
    return --counter
  }

  function reset(){
    counter = init
    return counter
  }

  return {
    add,
    decrement,
    reset
  }

}

class createCounter{
  constructor(init){
    this.init = init
    this.counter = init
  }

  add(){
    return ++this.counter
  }
  decrement(){
    return --this.counter
  }
  reset(){
    this.counter = this.init
    return this.counter
  }
}

class Adder {
  constructor(a) {
     this.a = a;
  }

  add(b) {
    const sum = this.a + b;
    return sum;
  }
}

function createAdder(a) {
  return function add(b) {
    const sum = a + b;
    return sum;      
  }
}

// dinamic programing

function memoize(fn) {
  const cache ={}
  return function(...args) {
      let key = JSON.stringify(args)
      if(key in cache){
        return cache[key];
      }
      cache[key] = fn(...args)
      console.log(cache)
      return cache[key]
  }
}

//  let callCount = 0;
// const memoizedFn = memoize(function (a, b) {
// 	 callCount += 1;
//    return a + b;
//  })
//  memoizedFn(2, 3) // 5
//  memoizedFn(2, 3) // 5
//  console.log(callCount) // 1 

const curry = function (fn) {
  let nums = []
  return function curried(...args) {
      nums = [...nums,...args]
      if(fn.length === nums.length ){
        const res = fn(...nums)
        nums = []
        return res
      }else{
        return curried
      }
  }
}

function suma(a,b) { return a + b}

const csum = curry(suma)

// console.log(csum(1)(2));

// PROMISE

var addTwoPromises = async function(promise1, promise2) {
  r1 = await promise1;
  r2 = await promise2;
  return r1+r2
};

//sleep
async function sleep(millis) {
  await new Promise((resolve,reject)=>{
    setTimeout(resolve,millis)
  })
}

// calear las funciones uno depuses de otra 
async function promisePool(functions,n){
  let i = 0;

  async function callback() {
    if(i === functions.length){
      return ;
    }
    await functions[i++]()
    await callback()
  }

  const nPromise = Array(n).fill().map(callback)
  await Promise.all(nPromise)
}

//timelimted cache

class TimeLimitedCache {
  cache = new Map();

  set(key, value, duration) {
      const alreadyExist = this.cache.get(key);
      if (alreadyExist) {
          clearTimeout(alreadyExist.timeoutId);
      }
      const timeoutId = setTimeout(() => {
          this.cache.delete(key);
      }, duration);

      this.cache.set(key, { value, timeoutId });
      return Boolean(alreadyExist);
  }

  get(key) {
      if (this.cache.has(key))
          return this.cache.get(key).value;
      return -1;
  }

  count() {
      return this.cache.size;
  }
}

// blind 75

const isDuplicate = function (nums) {
  for (let i = 0; i < nums.length; i++) {
    for(let j = i+1 ; j< nums.length; j++){
      if(nums[i] === nums[j]){
        return true
      }
    }
  }
  return false
}


        
































