function make_shirt(size: string = "Large", printMessage: string = "I love Typescript" ){
    console.log(`Creating  a ${size} shirt with a ${printMessage} prints on shirt.`)
}

// creating a function with by-default values
make_shirt();


//calling a function with different size but by default message
make_shirt("Medium");

//calling a function with small size but different message
make_shirt("Small", "I love JS")