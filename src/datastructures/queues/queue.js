//-----------------------------------------------------------------------------
// src/datastructures/queues/queue.js
//-----------------------------------------------------------------------------

/**
 * Queue implemented using a JavaScript object. Use the object keys to track the 
 * front of the queue and the number of elements in the queue, i.e., count.
 */
class Queue {
  constructor() {
    this.data   = {}
    this.front  = 0
    this.count  = 0
  }

  /**
   * Add an element to the rear of the queue.
   * @param {Object} element
   */
  enqueue = (element) => {
    this.data[this.count] = element
    this.count += 1
  }

  /**
   * Remove an element from the front of the queue.
   * @returns {Object} element
   */
  dequeue = () => {
    if(this.isEmpty()) return undefined
    
    const  element  = this.data[this.front]
    delete this.data[this.front]
    this.front    += 1
    this.count    -= 1

    return element
  }

  /**
   * Returns the front of the queue w/o removing it from the queue
   * @returns {Object} element
   */
  peek = () => {
    if(this.isEmpty()) return undefined
    return this.data[this.front]
  }

  /**
   * Removes all the elements from the queue.
   */
  clear = () => {
    this.data   = {}
    this.front  = 0
    this.count  = 0
  }

  /**
   * Returns true if the queue is empty, otherwise it returns false.
   * @returns boolean
   */
  isEmpty = () => {
    return this.count === 0 ? true : false
  }

  /**
   * Return the number of elements in the queue.
   * @returns {Integer} size
   */
  size = () => {
    return this.count
  }

  /**
   * Prints a string represenation of the queue.
   */
  toString = () => {
    let arr = []
    Object.keys(this.data).forEach( (key) => {
      arr.push(this.data[key])
    })
    return `[${arr.join(',')}]`
  }
}

// Export the Queue
export default Queue