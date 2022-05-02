const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement the Stack with a given interface via array.
 *
 * @example
 * const stack = new Stack();
 *
 * stack.push(1); // adds the element to the stack
 * stack.peek(); // returns the peek, but doesn't delete it, returns 1
 * stack.pop(); // returns the top element from stack and deletes it, returns 1
 * stack.pop(); // undefined
 *
 */
class Stack {
  array = [];
  //   constructor(element) {
  //     this.element = element;
  //   }
  push(element) {
    // throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here

    this.array.push(element);
    return this.arr;
  }

  pop() {
    // throw new NotImplementedError("Not implemented");
    // remove line with error and write your code here
    if (this.array.length === 0) {
      return undefined;
    } else {
      const a = this.array.at(-1);
      this.array.pop();
      return a;
    }
  }

  peek() {
    // throw new NotImplementedError("Not implemented");
    // remove line with error and write your code here
    return this.array.at(-1);
  }
}

module.exports = {
  Stack
};
