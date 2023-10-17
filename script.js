
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

console.log(totalMarks);

// console.log(namesfiltered)

// console.log(sumOfMarks)

// for (let i = 0; i < moreThan60Marks.length; i++) {
//   console.log(moreThan60Marks[i].name)
// }
// const onlyNames = moreThan60Marks.map(element=>{
//   return element.name
// })
// console.log(onlyNames)
// console.log(moreThan60Marks)

// console.log(mapNames)

// console.log(addName())




















