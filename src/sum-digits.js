const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a number, replace this number with
 * the sum of its digits until we get to a one digit number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For 100, the result should be 1 (1 + 0 + 0 = 1)
 * For 91, the result should be 1 (9 + 1 = 10, 1 + 0 = 1)
 *
 */
function getSumOfDigits( n ) {
  // throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
  let result = 0
  const fn = (number) => {
    let arr = number.toString().split('').map(x=>Number(x))
    result=arr.reduce((a,b)=>a+b)
    if(result.toString().split('').length>1) {
      fn(result)
    }
  }
  fn(n)
  return result
}

module.exports = {
  getSumOfDigits
};
