const { odd, even } = require("./var");
const numberCheck = require("./func");

const checkStringOddOrEven = str => {
  if (str.length % 2) {
    return odd;
  }
  return even;
};

console.log(numberCheck(1));
console.log(checkStringOddOrEven(2));


