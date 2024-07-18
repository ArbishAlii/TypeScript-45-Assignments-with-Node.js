//define a function to call each magician in a array
function show_magicians(magicians: string[]){
magicians.forEach(name => console.log(name));
}

//defining an array containg magicians
let magicians_name = ["Harry", "Hamza", "Usman"]

//calling functions
show_magicians(magicians_name);