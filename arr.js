let person = {
    name: "Diego",
    age:25
}
let arr= ["apple","banana","cherry"];

// add to the end
arr.push("orange")
// remove to the end
arr.pop()
// add to the begin
arr.unshift("pedro")
// rmeove to the begin
arr.shift()

function forandwhile() {
    for(let i = 0 ; i<arr.length; i++){
        console.log(arr[i])
    }
    
    let i = 0;
    
    while (i < arr.length) {
        console.log(arr[i]);
        i++
    }
}

const numbers = [1,2,3,4,5]

const numbersMap = numbers.map((item,index,array)=>{
    return item+5
})

const numsFilter = numbers.filter((item,index,array)=>{
    return item > 3
})

const numsReduce = numbers.reduce((acc,current,index,array)=>{
return acc + current
},0)

const numsSome = numbers.some((item,index,array)=>{
    return item > 3
})

const numsEvery = numbers.every((item,index,array)=>{
    return item > 3
})

const numsFind = numbers.find((item,index,array)=>{
    return item > 3
})

// ... operator

const nums = [1,2,3]
const nums2 = [5,6,7]

const finalNums = [...nums, ...nums2]

function sum(...numbers){
    return numbers
}

// concat
const concatArr = nums.concat(nums2,arr)

// Slice
const sliceArr = arr.slice(0,2)

// Splice
const spliceArr = arr.splice(0,2)
// console.log(spliceArr);

// Fill
const filled = [1,2,3,4]
const fillArr = filled.fill(0,2)

// FindIndex
const findIndex = numbers.findIndex((item)=>{
    return item === 2
})

// flat
const flatNums = [1,[2,3],[[4,5],6]]
const flatNumbers = flatNums.flat(2)

// reverse
nums.reverse()

// sort
const unsorted = [5,2,10,7,3,1]
unsorted.sort((a,b)=> a-b)
console.log(unsorted);















