const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater( str, options ) {
  // throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
  let result = ''
  let resArr = []
  let repeat = 1
  options.repeatTimes?repeat=options.repeatTimes:''
  for (let i=0; i<repeat; i++) {
    resArr.push(str)
  }
  let addStr = ''
  let addArr = []
  let addRep = 1
  options.additionRepeatTimes?addRep=options.additionRepeatTimes:''
  if(options.addition || typeof options.addition === 'boolean' || options.addition===null) {
    for (let i=0; i<addRep; i++) {
      addArr.push(options.addition)
    }
    if (options.addition===null) {
      addArr=addArr.map(x=>'null')
    }
    !options.additionSeparator?addStr=addArr.join('|'):addStr=addArr.join(options.additionSeparator)
  }
  if(addStr) {
    resArr=resArr.map(x=>x+addStr)
  }
  !options.separator?result=resArr.join('+'):result=resArr.join(options.separator)
  return result
}

module.exports = {
  repeater
};
