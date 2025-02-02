const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given matrix where you have to find cats by ears "^^"
 *
 * @param {Array<Array>} matrix 
 * @return {Number} count of cats found
 *
 * @example
 * countCats([
 *  [0, 1, '^^'],
 *  [0, '^^', 2],
 *  ['^^', 1, 2]
 * ]) => 3`
 *
 */
function countCats(matrix) {
  // throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here

  // let start = JSON.stringify(matrix)
  // let finish = start.replace('^^','')
  // return (start.length-finish.length)/2
  let newArr = matrix.flat()
  let count = 0
  for (let i=0; i<newArr.length; i++) {
    newArr[i]==='^^'?count++:''
  }
  return count

}

module.exports = {
  countCats
};
