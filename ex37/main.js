function make_shirt(size, printMessage) {
    if (size === void 0) { size = "Large"; }
    if (printMessage === void 0) { printMessage = "I love Typescript"; }
    console.log("Creating  a ".concat(size, " shirt with a ").concat(printMessage, " prints on shirt."));
}
// creating a function with by-default values
make_shirt();
//calling a function with different size but by default message
make_shirt("Medium");
//calling a function with small size but different message
make_shirt("Small", "I love JS");
