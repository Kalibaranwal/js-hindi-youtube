const accountId=12345
let accountEmail="prishiyamta@gmail.com"
var accountPassword="156734"
accountCity="Kolkata"
let accountState;

// accountId=2 // not allowed to change const value

accountEmail="abc@gmail.com"
accountPassword="3456789"
accountCity="Bengaluru"

console.log(accountId);
console.table([accountId,accountEmail,accountPassword,accountCity,accountState])

/* variables declared with let and const inside a block ({}) are block scoped means cant be access outside the 
 block. var, however, is not block-scoped and will leak outside the block..thats why we use let and const */

 /*without explicitly declaring variable we can assign value(see line 4) */
 // if we cant assign value to the variable it shows undefined in output(see line 5) 