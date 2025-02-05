const sumAll = function(integer1, integer2) {
    let sum = 0;
    if(!(Number.isInteger(integer1)) || !(Number.isInteger(integer2))) 
        return "ERROR";
    if(integer1 < 0 || integer2 < 0)
        return "ERROR";
    if(integer1>integer2) {
        const t = integer1;
        integer1 = integer2;
        integer2 = t;
    }
    for(let i=integer1; i <= integer2; i++)
        sum += i;
    return sum;


};

// Do not edit below this line
module.exports = sumAll;
