const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 * 
 */
const chainMaker = {
  chain:[],
  getLength() {
    // throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
    return this.chain.length
  },
  addLink(value ) {
    // throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
    if (value===null) {
      this.chain.push('null')
    } else {
    this.chain.push(value.toString())}
    return this
  },
  removeLink(position) {
    // throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
    let error = new Error('You can\'t remove incorrect link!')
    if (this.chain[position-1]) {
      let newArr = []
      for (let i=0; i<this.chain.length; i++) {
        if(i!==position-1){newArr.push(this.chain[i])}
      }
      this.chain=[...newArr]
    } else {
      this.chain=[]
      throw error
    }
    return this
  },
  reverseChain() {
    // throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
    this.chain.reverse()
    return this
  },
  finishChain() {
    // throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
    let curChain = this.chain.map(x=>'( '+x+' )').join('~~')
    this.chain=[]
    return curChain
  }
};

module.exports = {
  chainMaker
};
