//  taking ex14 but thinks that a guest is not coming so changing the guest list 
var Guests = ["Aiman", "Ahbab", "Azeem"];
var notComing = Guests[2];
console.log(notComing, "can not attend the dinner");
//splice removes any value in the array and can replaced it with some other
Guests.splice(0, 1, "Laiba");
// taking 0 here to remove and then 1 to place the name here
Guests.forEach(function (Guest) { return console.log("Hi ".concat(Guest, ", You Are Invited To a Dinner Party!")); });
