var Guests = ["Aiman", "Ahbab", "Azeem"];
var notComing = Guests[2];
console.log(notComing, "can not attend the dinner");
Guests.splice(2, 3, "Laiba");
console.log("Good News! We have a big table Now");
// adding a new value at the start of array
Guests.unshift("Ali");
//adding a new value at the end of array
Guests.push("Urooj");
//making a variable for storing a middle index of guests
var middleIndex = (Guests.length / 2);
// adding a new guest to middle index of array
Guests.splice(middleIndex, 0, "Junaid");
console.log("Updated List of our guests");
Guests.forEach(function (Guest) { return console.log("Hi ".concat(Guest, ", You Are Invited To a Dinner Party!")); });
console.log("Unfortunately,the table won't arrive on time so only two guests are invited!");
while (Guests.length > 2) {
    var removedGuest = Guests.pop();
    console.log("Sorry, ".concat(removedGuest, " you can not come to the dinner"));
}
//sending invitation to last two guests 
console.log("Invitation to the last two guests");
Guests.forEach(function (lastTwo) { return console.log("Luckily, ".concat(lastTwo, " you are still invited to dinner")); });
//removing out the guest from the list
Guests.pop();
Guests.pop();
console.log("EmptyList:", Guests);
