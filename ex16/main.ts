let Guests = ["Aiman", "Ahbab", "Azeem"];

let notComing = Guests[2];

console.log(notComing, "can not attend the dinner");

Guests.splice(2, 3, "Laiba");

console.log("Good News! We have a big table Now");

// adding a new value at the start of array
Guests.unshift("Ali");

//adding a new value at the end of array
Guests.push("Urooj");

//making a variable for storing a middle index of guests
let middleIndex: number = (Guests.length / 2);

// adding a new guest to middle index of array
Guests.splice(middleIndex, 0, "Junaid");

console.log("Updated List of our guests");

Guests.forEach(Guest => console.log(`Hi ${Guest}, You Are Invited To a Dinner Party!`));