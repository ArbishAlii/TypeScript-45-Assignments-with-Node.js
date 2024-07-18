var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
//using for loop
for (var _i = 0, numbers_1 = numbers; _i < numbers_1.length; _i++) {
    var oneNumber = numbers_1[_i];
    var OrdinalEnding = void 0;
    if (oneNumber === 1) {
        OrdinalEnding = "st";
    }
    else if (oneNumber === 2) {
        OrdinalEnding = "nd";
    }
    else if (oneNumber === 3) {
        OrdinalEnding = "rd";
    }
    else {
        OrdinalEnding = "th";
    }
    console.log("".concat(oneNumber).concat(OrdinalEnding));
}
