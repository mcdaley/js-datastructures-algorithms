#!/usr/bin/env node
//-----------------------------------------------------------------------------
// src/datastructures/stack/stack-array.js
//-----------------------------------------------------------------------------

/**
 * Stack is an ordered collection of items that follows the last in, first
 * out (LIFO) principle. The addition and removal of items take place at the
 * same end, the top. The Stack class is a simple implementation using the
 * JavaScript Array.
 */
class StackArray {
  constructor() {
    this.data = []
  }

  /**
   * Add a new element to the top of the stack
   * @param {Object} element
   */
  push = (element) => {
    this.data.push(element)
  }

  /**
   * Removes the top element from the stack and returns the removed element.
   * @returns element
   */
  pop = () => {
    if( this.isEmpty() ) return null

    const  element = this.data.pop()
    return element;
  }

  /**
   * Returns the top element of the stack without removing the item from the
   * stack.
   * @returns element
   */
  peek = () => {
    if( this.isEmpty() ) return null

    return this.data[this.data.length - 1]
  }

  /**
   * Returns true if the stack does not contain any elements, otherwise it
   * returns false.
   * @returns {boolean}
   */
  isEmpty = () => {
    return this.size() === 0 ? true : false
  }

  /**
   * Returns the number of elements in the stack.
   * @returns {Integer}
   */
  size = () => {
    return this.data.length
  }

  /**
   * Removes all the elements from the stack.
   */
  clear = () => {
    this.data = []
  }

  toString = () => {
    return this.data.toString()
  }
}

// Export the StackArray
export default StackArray
