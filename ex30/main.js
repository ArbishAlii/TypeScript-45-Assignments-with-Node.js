var UserNames = ["Arbish", "Ahbab", "Aiman", "Azeem", "Admin"];
UserNames.forEach(function (oneuser) {
    if (oneuser === "Admin") {
        console.log("Hey ".concat(oneuser, ", would you like to see a report today?"));
    }
    else {
        console.log("Hey ".concat(oneuser, ", Thank you for logging in again"));
    }
});
