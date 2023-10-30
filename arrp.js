// Ques 1 - Second Largest Number
// Given an array Arr of size N, print second largest
// distinct element from an array.

// Input: [12, 35, 1, 10, 34, 1]  ----->>>>>  Output: 34
// Input: [10, 5, 10]             ----->>>>>  Output: 5

function secondLargest1(nums) {
    nums.sort((a,b)=>b-a)
    return nums.find((item)=>{
        return item < nums[0]
    })
}

function secondLargest2(nums) {
    const uniqueArr = Array.from(new Set(nums))
    uniqueArr.sort((a,b)=> b-a)
    
    if(uniqueArr.length >= 2){
        return uniqueArr[1]
    }else{
        return -1
    }

}

function secondLargest3(nums) {
    let largest = -1;
    let secondLargest = -1;

    for (let i = 0; i < nums.length; i++) {
       if(nums[i] > largest){
        secondLargest = largest
        largest = nums[i]
       }else if(nums[i] != largest && nums[i] > secondLargest){
        secondLargest = nums[i]
       }   
    }
    return secondLargest
}
// Ques 2 - Rotate Array by K  25 - 10
// Given an integer array nums, rotate the array to the right by k steps,
// where k is non - negative.

// Input: nums = [1,2,3,4,5,6,7], k = 3  ----->>>>>  Output: [5,6,7,1,2,3,4]
// Input: nums = [-1,-100,3,99], k = 2   ----->>>>>  Output: [3,99,-1,-100]

function rotateArrayk1(nums,k) {
    let borrados = nums.splice(nums.length - k , k)
    return borrados.concat(nums)

}

function rotateArrayk2(nums,k) {
    for (let i = nums.length-1 ; i > nums.length-1 - k  ; i--) {
        let elementoborrado = nums.pop()
        nums.unshift(elementoborrado)
    }
    return nums
}

function rotateArrayk3(nums,k) {
    let size = nums.length
    if(k > size){
        k = k % size
    }

    let numsborrados = nums.splice(size - k , k)
    return nums.unshift(...numsborrados)

}

function rotateArrayk4(nums,k) {
    let size = nums.length
    if(k>size){
        k = k%size
    }  

    reversed(nums,0,size-1)
    reversed(nums,k,size-1)
    reversed(nums,0,k-1)
    console.log(nums);
}

function reversed(nums,left,right) {

    while(left < right){
        const temp = nums[left]
        nums[left] = nums[right]
        nums[right] = temp
        left++;
        right--;
    }

}

// console.log(rotateArrayk4([1,2,3,4,5,6,7],3));

// Ques 3 - Remove Duplicates from Sorted Array
// Given an integer array nums sorted in non-decreasing order, 
// remove the duplicates in-place such that each unique element appears only once.
// The relative order of the elements should be kept the same.
// Then return the number of unique elements in nums.

// Input: [1,1,2]               ----->>>>>  Output: 2, [1,2,_]
// Input: [0,0,1,1,1,2,2,3,3,4] ----->>>>>  Output: 5, [0,1,2,3,4,_,_,_,_,_]

function removeDuplicate1(nums) {
    let setNums = Array.from(new Set(nums))
    return setNums.length
}

function removeDuplicate2(nums) {
    for (let i = 0; i < nums.length -1 ; i++) {
        if(nums[i] ===  nums[i+1]){
            nums.splice(i+1,1)
            i--
        }  
    }
    return nums.length
    
}

function removeDuplicate3(nums) {
    if(nums.length === 0) return 0;
    let i = 0

    for (let j = 1; j < nums.length; j++) {
        if(nums[i] !== nums[j]){
            i++
            nums[i] = nums[j]
        } 
    }
    return i+1
    
}

// Ques 4 - Given an integer array nums, find the subarray with the largest sum,
// and return its sum.

// Input: [-2,1,-3,4,-1,2,1,-5,4]     ----->>>>>    Output: 6,   [4,-1,2,1]
// Input: [5,4,-1,7,8]                ----->>>>>    Output: 23,  [5,4,-1,7,8]

function largestSum(nums) {
  let n1 = 0 ;
  let n2 = 0;

  for (let i = 0; i < nums.length; i++) {
    if(nums[i] > n1){
        n2 = n1
        n1 = nums[i]
    } else if(nums[i] > n2){
        n2 = nums[i]
    }
  }
  return [n1 ,n2]
}

// Ques 4 - Given an integer array nums, find the subarray with the largest sum,
// and return its sum.

// Input: [-2,1,-3,4,-1,2,1,-5,4]     ----->>>>>    Output: 6,   [4,-1,2,1]
// Input: [5,4,-1,7,8]                ----->>>>>    Output: 23,  [5,4,-1,7,8]

function maxSubarray(nums) {
    let sum = 0
    let max = nums[0]
    for (let i = 0; i < nums.length; i++) {
         sum = sum + nums[i]
         if(sum > max){
            max = sum
         }
         if(sum < 0){
            sum = 0
         }
    }
    return max
    
}

function maxSubarray2(nums) {

    let max = nums[0]

    for (let i = 0; i < nums.length; i++) {
        let currentSum = 0;
        for (let j = 0; j < array.length; j++) {
          currentSum = currentSum + nums[j]
          if(currentSum > max){
            max = currentSum
          } 
        }   
    }
    
}
console.log(maxSubarray([5,4,-1,7,8]));