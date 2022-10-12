const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats( domains ) {
  // throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
  let result = {}
  for (let i = 0; i<domains.length; i++) {
    let newArr = domains[i].split('.').map(x=>'.'+x)
    let currId = newArr.length-1
    let currDomain=''
    while (currId>=0) {
      currDomain = currDomain + newArr[currId];
      (!result[currDomain]?result[currDomain]=1:result[currDomain]++)
      currId--
    }
  }
  return result
}

module.exports = {
  getDNSStats
};
