const add = function (num1, num2) {
  return num1 + num2;
};

const subtract = function (num1, num2) {
  return num1 - num2;
};

const sum = function (numArr) {
  let arrSum = 0;
  for (let num of numArr) {
    arrSum += num;
  }
  return arrSum;
};

const multiply = function (numArr) {
  let numSum = 1;
  for (let num of numArr) {
    numSum *= num;
  }
  return numSum;
};

const power = function (num, expo) {
  return Math.pow(num, expo);
};

const factorial = function (num) {
  if (num === 0 || num === 1) return 1;
  let sum = 1;
  for (let i = num; i > 0; i--) {
    sum *= i;
  }
  return sum;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial,
};
