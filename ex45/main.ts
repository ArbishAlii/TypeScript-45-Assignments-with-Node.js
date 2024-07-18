//defining a function to create a car object
function create_car(manufacturer, model, ...options){

//Initialize a car object with manufacturer and model 
let car = {
    manufacturer: manufacturer,
    model: model,
};

//add additional options to the car object
options.forEach(option => {
    let [key, value] = option.split(":")
    car[key.trim()] = value.trim();
});

return car;
}

//call the function to reate a car object
let my_car = create_car("Toyota", "Corolla", "color: Black", "Sunroof: True", "Year: 2024");

//print the variable to ensure all the information is stored in the car object
console.log(my_car);