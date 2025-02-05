const removeFromArray = function(arr, ...int) {
    newArray = [];
    //forEach is a For Of loop for arrays goes through each element and does the specicified thing in the paramter
    //three possible paramters inside forEach method, (currentElement, index, array)

    //.includes() useful here because we have unlimited arguments and need to check if any of them match array elements
    arr.forEach((element) => {
        if(!(int.includes(element))) {
            newArray.push(element);
        }; 
    });
    if (newArray.includes('')) newArray = arr;
    return newArray;
};

// Do not edit below this line
module.exports = removeFromArray;
