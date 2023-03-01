const fibonacci = function (num) {
  if (num < 0) return "OOPS";
  const fib = [1];
  for (let i = 1; i < num; i++) {
    if (i === 1) {
      fib.push(i);
    } else {
      fib[i] = fib[i - 2] + fib[i - 1];
    }
  }
  return fib[fib.length - 1];
};

// Do not edit below this line
module.exports = fibonacci;
