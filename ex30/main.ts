let UserNames = ["Arbish", "Ahbab", "Aiman", "Azeem", "Admin"];

UserNames.forEach(oneuser => {
    if (oneuser === "Admin") {
        console.log(`Hey ${oneuser}, would you like to see a report today?`);
    } else {
         console.log(`Hey ${oneuser}, Thank you for logging in again`);
}
})