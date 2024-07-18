//defining a function with rest parameters taht accept items as arguments representing our function
function make_Sandwich(...items: string[]){
console.log("Making a Sandwich with following items: \n");

items.forEach(singleItem => console.log("-" +singleItem));

console.log("Now Enjoy Sandwich!\n");

}
//calling function three times with three different arguments
make_Sandwich("Bread", "Chicken", "Cheese", "Mayonaise", "Egg");
make_Sandwich("Bread", "Butter", "chicken");
make_Sandwich("Bread", "Chicken", "Tomato", "Lettuce", "Onion", "Cheese", "Mayo", "Ketchup");