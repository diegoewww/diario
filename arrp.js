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

console.log(secondLargest3([1 ,10, 1]));