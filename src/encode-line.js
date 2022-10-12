const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str ) {
  // throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
  let newArr = str.split('')
  let result = ''
  let curSmb = str[0]
  let counter = 1
  for (let i = 1; i<str.length; i++) {
    if (str[i]===curSmb) {
      counter++
    } else if (counter>1) {
      result+=(counter.toString()+curSmb)
      curSmb=str[i]
      counter=1
    } else {
      result+=curSmb
      curSmb=str[i]
      counter=1
    }
    if(i===str.length-1 && counter>1) {
      result+=(counter+curSmb)
    }
    if(i===str.length-1 && counter===1){result+=curSmb}
  }

  return result
}

module.exports = {
  encodeLine
};
