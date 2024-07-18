let places: string[] = ["Switzerland", "Turkey", "Malaysia" , "Dubai"];
console.log("Original Order:", places);

// .sort is used to print them in a sort without modifying the actual array list
console.log("Alphabetical Order:", [...places].sort());

//showing array still in original order
console.log("Original array is:", places);

// .reverse is used to print array in reverse aplhabetical order
console.log("Reverse Alphabetical Order:", [...places].reverse());

//showing array still in original order
console.log("Original array is:", places);

// reversing original array order
console.log("Original Order Reversed:", places.reverse());

// reversing the order of reversed array 
console.log("back To Original Order:", places.reverse());

// we use [] when making a copy of variable name of array, here we are only using original name so no need to use it
console.log("Sorted in Alphabetical Order:", places.sort());

// reversing original array order again
console.log("Original Order Reversed Again:", places.reverse());