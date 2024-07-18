var current_users = ["Arbish", "Ahbab", "Aiman", "Azeem", "Laiba"];
var new_users = ["Urooj", "Ali", "Arbish", "Fatima", "Ahbab"];
//loop through new_users to check for new user name availability
// making a condition of username if already exists
new_users.forEach(function (one_new_user) {
    if (current_users.some(function (current_one_user) { return current_one_user.toLowerCase() === one_new_user.toLowerCase(); })) {
        console.log("Sorry ".concat(one_new_user, " is already taken!"));
    }
    else {
        console.log("This username ".concat(one_new_user, " is available."));
    }
});
// another method of doing this is:
// let our_condition = current_users.some(current_one_user => current_one_user.toLowerCase() === one_new_user.toLowerCase())
// if (our_condition){}
