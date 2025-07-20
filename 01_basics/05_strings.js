const name="Kali"
const repoCount=21
console.log(name+repoCount+"Value")

// backticks(``) are the characters-they define a template literal in javascript
// This is modern way of writing called string interpolation. Benefit of this is we can write on the go if i want to make name uppercase then i write example {name.Touppercase }
console.log(`Hello my name is ${name} and my repoCount is ${repoCount}`)

const gameName=new String('ka-li-me')  // this gives key value pair like 0:k,1:a,2:l,3:i,4:m,5:e
console.log(gameName)
console.log(gameName[0])
console.log(gameName.length)
console.log(gameName.toUpperCase())
console.log(gameName.charAt(2))
console.log(gameName.indexOf('l'))
console.log(gameName.substring(0,4))   // in substring we cant take negative value..otherwise it default be zero
console.log(gameName.slice(-7,3))      // in slice we take negative value

const stringOne="  kali  "
console.log(stringOne)
console.log(stringOne.trim())

const url="https://www.google%20giggle.com"
console.log(url.replace('%20','-'))
console.log(url.includes('abc'))
console.log(gameName.split('-'))