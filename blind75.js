// blind 75 

const isDuplicate1 = function (nums) {
    for (let i = 0; i < nums.length; i++) {
      for(let j = i+1 ; j< nums.length; j++){
        if(nums[i] === nums[j]){
          return true
        }
      }
    }
    return false
  }
  
  const isDuplicate2 = function (nums) {
    
    nums.sort(function(a, b){return a - b})
  
    for(let i = 0; i<nums.length-1; i++){
      if(nums[i] === nums[i+1]){
        return true
      }
    }
    return false
  
  }
  
  const isDuplicate3 = function (nums) {
  
    let numsSet = new Set(nums)
    let equal = numsSet.size === nums.length
    return !equal
    
  }
  
  const isDuplicate4 = function (nums, numsSet = new Set()) {
    for(const num of nums){
      if(numsSet.has(num)) return true
      numsSet.add(num)
    }
    return false
  }
  
  const isDuplicate5 = function (nums) {
    let cache = {}
    for (let i = 0; i < nums.length; i++) {
      if(cache[nums[i]] === nums[i]){
        return true
      }
      cache[nums[i]] = nums[i]
    }
    return false
    
  }
  // console.log(isDuplicate5([1,2,3,1]));