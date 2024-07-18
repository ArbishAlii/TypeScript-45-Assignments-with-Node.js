function show_magicians(magicians: string[]) {
    magicians.forEach(name => console.log(name));
}


//function to add great with names through .map(). This modifies the array
function make_great(magicians: string[]){
return magicians.map(name => `The great ${name}`);
}
let magicians_name = ["Harry", "Hamza", "Usman"];

//make a copy of original array through slice function
let copy_magiciansName = magicians_name.slice();

//modified the copied array to include "The Great" with their names
let copy_great_magicians = make_great(copy_magiciansName);

//show both arrays original & copied
console.log("Original Array: \n")
show_magicians(magicians_name);

console.log("\n Copied Array\n")
show_magicians(copy_great_magicians);