//ARRAY
const myArr=[1,2,3,4,5]
const myHeroes=["krit","krrish"]
const myArr2= new Array(1,2,3,4)
console.log(myArr[1])


myArr.push(6)
console.log(myArr)

myArr.pop()
console.log(myArr)

myArr.unshift(7)
console.log(myArr)

myArr.shift()
console.log(myArr)

myArr.shift()
console.log(myArr)
console.log(myArr.includes(10))
console.log(myArr.indexOf(3))

const newArr=myArr.join()      // join is used to combine the array and also make it string
console.log(myArr)
console.log(typeof newArr)

//SLICE- in slice last range is not included, extracts a section of the array and return a new array without modifying the original array
console.log("A",myArr)
const myn1=myArr.slice(2,4)
console.log(myn1)

//SPLICE- in splice last range is included,  modify the original array by adding removing or replacing elements
let myArr3=[1,2,3,4,5,6,7,8]
console.log("B",myArr3)
const myn2=myArr3.splice(2,4)
console.log(myn2)