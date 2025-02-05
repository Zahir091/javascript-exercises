const reverseString = function(string) {
    let newString = '';
    let length = string.length;
    for(let i=0; i<length ; i++) {
        newString = newString + string.charAt(string.length-1); 
        string = string.slice(0, -1); //Slice will seperate everything into the string but takes out the last char
    };
    return newString;
};

// return string.split("").reverse().join("");
// .split("") makes the string an array
// .reverse() makes the array reverse
// .join() makes the array a string again

// Do not edit below this line
module.exports = reverseString;
