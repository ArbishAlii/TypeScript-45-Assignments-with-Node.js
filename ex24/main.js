var apple = "Apple";
var uppercaseletters = "APPLE";
var ten = "10";
var twenty = "20";
var fruits = ["apple", "banana", "orange"];
//test for equality & inequality with strings
console.log("Is apple equals to Apple?");
console.log(apple == "Apple");
console.log("\nIs apple  not equals to Apple?");
console.log(apple != "Apple");
//test using the lowercase functions
console.log("\nIs APPLE equals to Apple after converting into lowercase?");
console.log(uppercaseletters.toLowerCase() == "Apple");
console.log("\nIs APPLE not equals to Apple after converting into lowercase?");
console.log(uppercaseletters.toLowerCase() != "Apple");
//numerical test
//equality & inequality
console.log("\nIs ten equals to twenty?");
console.log(ten == twenty);
console.log("\nIs ten not equals to twenty?");
console.log(ten != twenty);
//greater than or less than
console.log("\nIs ten greater than zero?");
console.log(ten > "0");
console.log("\nIs twenty less than ten?");
console.log(twenty < "10");
//greater than/less than or equals to
console.log("\nIs ten greater than or equals to 5?");
console.log(ten >= "5");
console.log("\nIs twenty less than or equals to 10?");
console.log(twenty <= "10");
//test using "and" & "or" operators
//AND 
console.log("\n twenty is not equal to ten and twenty is greater than ten");
console.log(twenty != "10" && twenty > "10");
console.log("\n twenty is not equal to ten and twenty is greater than thirty");
console.log(twenty != "10" && twenty > "30");
//OR
console.log("\n 20 is greater than 50 OR 20 is equal to 20");
console.log(20 > 50 || 20 == 20);
console.log("\n 20 is greater than 50 OR 20 is not equal to 20");
console.log(20 > 50 || 20 != 20);
//check if element is in array or not
console.log("\n orange is included in array of fruits?");
console.log(fruits.includes("orange"));
console.log("\n orange is not included in array of fruits?");
console.log(!fruits.includes("orange"));
