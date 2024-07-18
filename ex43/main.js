function show_magicians(magicians) {
    magicians.forEach(function (name) { return console.log(name); });
}
//function to add great with names through .map(). This modifies the array
function make_great(magicians) {
    return magicians.map(function (name) { return "The great ".concat(name); });
}
var magicians_name = ["Harry", "Hamza", "Usman"];
//make a copy of original array through slice function
var copy_magiciansName = magicians_name.slice();
//modified the copied array to include "The Great" with their names
var copy_great_magicians = make_great(copy_magiciansName);
//show both arrays original & copied
console.log("Original Array: \n");
show_magicians(magicians_name);
console.log("\n Copied Array\n");
show_magicians(copy_great_magicians);
