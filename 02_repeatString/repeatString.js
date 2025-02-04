const repeatString = function(theString, numOfTimes) {
    if (numOfTimes < 0) return "ERROR";
    let newString = "";
    for(let i = 0; i<numOfTimes; i++) {
        newString = newString + theString;
    };
    return newString;
};


// Do not edit below this line
module.exports = repeatString;
