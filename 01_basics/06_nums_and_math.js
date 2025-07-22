//NUMS

const score=500
console.log(score)

const balance=new Number(100)
console.log(balance)
console.log(balance.toString().length)
console.log(balance.toFixed(3))

const otherNumber=34567.37348
console.log(otherNumber.toPrecision(4))    // set to 4 digits

const hundreds=10000000
console.log(hundreds.toLocaleString('en-IN'))    // default is US standard

//MATHS

console.log(Math)
console.log(Math.abs(-4))
console.log(Math.round(4.6))
console.log(Math.ceil(4.2))
console.log(Math.floor(3.5))
console.log(Math.min(1,6,0,9,5))
console.log(Math.max(6,2,4,5,6))
console.log(Math.random())
console.log((Math.random()*10) + 1)
console.log(Math.floor(Math.random()*10) + 1)

const min=10
const max=20
console.log(Math.random() * (max - min + 1))
console.log(Math.floor(Math.random() * (max -min + 1)) + min)

