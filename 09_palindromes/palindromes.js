const palindromes = function (str) {
  const editedStr = str.toLowerCase().replace(/[^a-z]/g, "");
  return editedStr.split("").reverse().join("") === editedStr;
};

// Do not edit below this line
module.exports = palindromes;
