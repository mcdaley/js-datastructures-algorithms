//-----------------------------------------------------------------------------
// src/datastructures/queues/queue-array.js
//-----------------------------------------------------------------------------

/**
 * Queue implementation built with an Array.
 */
class QueueArray {
  constructor() {
    this.data = []
  }

  /**
   * Add an element to the rear of the queue.
   * @param {Object} element
   */
  enqueue = (element) => {
    this.data.push(element)
  }

  /**
   * Remove an element from the front of the queue.
   * @returns {Object} element
   */
  dequeue = () => {
    return this.isEmpty() ? null : this.data.shift()
  }

  /**
   * Returns the front of the queue w/o removing it from the queue
   * @returns {Object} element
   */
  peek = () => {
    return this.isEmpty() ? null : this.data[0]
  }

  /**
   * Returns true if the queue is empty, otherwise it returns false.
   * @returns boolean
   */
  isEmpty = () => {
    return this.data.length === 0 ? true : false
  }

  /**
   * Return the number of elements in the queue.
   * @returns {Integer} size
   */
  size = () => {
    return this.data.length
  }

  /**
   * Removes all the elements from the queue.
   */
  clear = () => {
    this.data = []
  }

  /**
   * Prints a string represenation of the queue.
   */
  toString = () => {
    return this.data.toString()
  }
}

// Export the QueueArray
export default QueueArray