const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class DepthCalculator with method calculateDepth
 * that calculates deoth of nested array
 * 
 * @example
 * 
 * const depthCalc = new DepthCalculator();
 * depthCalc.calculateDepth([1, 2, 3, 4, 5]) => 1
 * depthCalc.calculateDepth([1, 2, 3, [4, 5]]) => 2
 * depthCalc.calculateDepth([[[]]]) => 3
 *
 */
class DepthCalculator {
  calculateDepth(arr ) {
    // throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
    let currArr = [...arr]
    let count = 1
    let changer = 1

    while (changer !== 0) {
      let haveArr = false
      let newArrs = []

      for (let i=0; i<currArr.length; i++) {
        if(Array.isArray(currArr[i])) {
          haveArr = true
          for (let j=0; j<currArr[i].length; j++) {
            newArrs.push(currArr[i][j])
          }
        }
      }
      currArr=newArrs
      if (!haveArr) {changer=0} else {count++}

    }
    return count
  }
}

module.exports = {
  DepthCalculator
};
