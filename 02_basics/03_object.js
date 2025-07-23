// in object we can define key and value both
// for symbol we have to define symbol and act as key which we do below and print krwaana hai
const mySym=Symbol("mykey1")

const JsObject={
    name:"kali",
    age:21,
    location:"kolkata",
    full_name:"kali baranwal",
    [mySym]:"mykey1"      // [] square bracket is used because of defining symbol
}
console.log(JsObject.full_name)
console.log(JsObject["name"])
console.log(JsObject[mySym])

JsObject.name="krit"
//Object.freeze(JsObject)      // VALUE FREEZE ho gya matlb uske baad kuch dusra use kro to nai kaam krega 
JsObject.name="krish"
console.log(JsObject)

JsObject.greeting=function(){
    console.log("HELLO MAA")
}
console.log(JsObject.greeting())