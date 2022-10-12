const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit( n) {
  // remove line with error and write your code here
  // throw new NotImplementedError('Not implemented');
  let start = n.toString()
  let res = 0
  for (let i=0; i<start.length; i++) {
    let current = ''
    current = start.slice(0,i)+start.slice(i+1)
    if (Number(current)>res) {res=Number(current)}
  }
  return res
}
module.exports = {
  deleteDigit
};
