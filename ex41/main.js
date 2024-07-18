//define a function to call each magician in a array
function show_magicians(magicians) {
    magicians.forEach(function (name) { return console.log(name); });
}
//defining an array containg magicians
var magicians_name = ["Harry", "Hamza", "Usman"];
//calling functions
show_magicians(magicians_name);
