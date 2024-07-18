function show_magicians(magicians: string[]) {
    magicians.forEach(name => console.log(name));
}


//function to add great with names through .map(). This modifies the array
function make_great(magicians: string[]){
return magicians.map(name => `The great ${name}`);
}
let magicians_name = ["Harry", "Hamza", "Usman"];

let great_magicians = make_great(magicians_name);

show_magicians(great_magicians);


