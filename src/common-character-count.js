const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
function getCommonCharacterCount( s1, s2) {
  // throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
  let count = 0
  let minS
  let maxS
  if (s1.length<=s2.length) {
    minS=s1
    maxS=s2
  } else {
    minS=s2
    maxS=s1
  }
  let startLength = maxS.length
  for (let i=0; i<minS.length; i++) {
    maxS= maxS.replace(minS[i],'')
  }
  return startLength-maxS.length
}

module.exports = {
  getCommonCharacterCount
};
