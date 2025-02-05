const convertToCelsius = function(temp) {
  return Math.round((temp - 32)*(5/9)*10)/10;
};

const convertToFahrenheit = function(temp) {
  return Math.round((temp*(9/5) + 32) * 10)/10;
  //First get the answer, then multiply by then to move decimal one right, then round to cut off other places, then divide 10 to get 1 place
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
