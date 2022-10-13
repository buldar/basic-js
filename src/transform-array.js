const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
function transform( arr ) {
  // throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
  if (!Array.isArray(arr)) {throw new Error('\'arr\' parameter must be an instance of the Array!')}
  let test = [...arr]
  for (let i=0; i<test.length; i++) {
    if (test[i]==='--discard-prev' && test[i-1]) {
      test[i-1]='DELETED'
    }
    if (test[i]==='--discard-next' && test[i+1]) {
      test[i+1]='DELETED'
    }
    if (test[i]==='--double-prev' && test[i-1]) {
      test[i]=test[i-1]
    }
    if (test[i]==='--double-next' && test[i+1]) {
      test[i]=test[i+1]
    }
  }

  return test.filter(x=>((x!=='DELETED') && (x!=='--discard-prev') && (x!=='--discard-next') && (x!=='--double-prev') && (x!=='--double-next')))
}

module.exports = {
  transform
};
