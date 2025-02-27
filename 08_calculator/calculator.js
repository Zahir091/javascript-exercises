const add = function(...nums) { //creates an array of parameters
  return nums.reduce((total, curr) => {
    return curr + total;
  },0) 
};

const subtract = function(...nums) {
	return nums.splice(1).reduce((total, curr) => {
    return total - curr;
  }, nums[0]);
};

const sum = function(nums) {
  return nums.reduce((total, curr) => {
    return curr + total;
  },0);
};

const multiply = function(nums) {
  return nums.reduce((total, curr) => {
    return total * curr;
  }, 1);
};

const power = function(num, expo) {
  if(expo === 0)
    return 1;
	return num * power(num, expo-1);
};

const factorial = function(num) {
  if(num === 1)
    return 1;
  if(num === 0)
    return 1;
	return num * factorial(num-1);
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
