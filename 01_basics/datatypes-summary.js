//  Primitive

//  7 types : String, Number, Boolearn, null, undefined, Symbol, BigInt

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId);

// const bigNumber = 3456543576654356754n



// Reference (Non primitive)

// Array, Objects, Functions

const heros = ["shaktiman", "naagraj", "doga"];
let myObj = {
    name: "hitesh",
    age: 22,
}

const myFunction = function(){
    console.log("Hello world");
}

console.log(typeof anotherId);

// MEMORY : Stack memory and Heap memory

// Stack memory is primitive and isme jo variable declare karte hai uska copy milta hai
//Stack memory example
let myYoutubeChannel="kalibaranwal"
let anotherName=myYoutubeChannel
anotherName="kritkumar"
console.log(myYoutubeChannel)
console.log(anotherName)


// Heap memory is non primitive and jab bhi koi memory heap mai jaati hi to isse hmko reference milta hai 
// Heap memory example
let userOne={
    email:"abc@gmail.com",
    upiid:"abf@ybl"
}
let userTwo=userOne
userTwo.email="kali@gmail.com"
console.log(userOne.email)
console.log(userTwo.email)
