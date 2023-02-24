const removeFromArray = function (arr, ...items) {
  return arr.filter((num) => !items.includes(num));
};

// Do not edit below this line
module.exports = removeFromArray;
