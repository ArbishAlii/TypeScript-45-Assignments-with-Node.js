let UserNames = ["Arbish", "Ahbab", "Aiman", "Azeem", "Admin"];

// making an empty array to check result, it would be not same as ex 30
UserNames = []

if(UserNames.length === 0){
console.log("Your array is empty. We need to find new users!")

}else{
    UserNames.forEach(oneuser => {
        if (oneuser === "Admin") {
            console.log(`Hey ${oneuser}, would you like to see a report today?`);
        } else {
             console.log(`Hey ${oneuser}, Thank you for logging in again`);
    }
    })
}

// the output is same as ex 30 because of not empty array (in line 2)