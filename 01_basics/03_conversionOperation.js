let score=null
console.log(typeof score);  
console.log(typeof(score)); 

let valueIntNumber=Number(score)
console.log(typeof valueIntNumber);  
console.log(valueIntNumber);        

// "33" =>33
// "33abc" =>NaN
// true =>1 and false =>0

let isLoggedIn=1
let booleanIsLoggedIn=Boolean(isLoggedIn)
console.log(booleanIsLoggedIn);

// 1 =>true and 0 => false
// "" => false
// "kali" => true

let someNumber=21
let stringNumber=String(someNumber)
console.log(stringNumber);
console.log(typeof stringNumber);

/*  OPERATIONS */
let value=21
let negValue= -value
console.log(negValue);

console.log(2+2);
console.log(2-2);
console.log(2*2);
console.log(2**3)
console.log(2/3);
console.log(2%3);

let str1="kali"
let str2="baranwal"
let str3= str1 + str2
console.log(str3);

console.log(1 + "2");
console.log("1" + 2);
console.log("1" + "2" + 3);
console.log(1 + 2 + "3");
console.log(1 + 2 + "3" + "4" + 5);
console.log((1 + 2)* 3 % 2 );
console.log(true);   // give true
console.log(+true); // give 1
console.log(+"");  // give false 

let num1, num2, num3
num1 = num2 = num3 = 2+2

let gameCounter=100
gameCounter++
console.log(gameCounter)