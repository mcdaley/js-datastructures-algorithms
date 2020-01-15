//-----------------------------------------------------------------------------
// src/datastructures/queues/deque.js
//-----------------------------------------------------------------------------

/**
 * Deque implementation where items can be added/removed from the front and
 * the back of the queue.
 */
export class Deque {
  constructor() {
    this.front  = 0
    this.count  = 0
    this.data   = {}
  }

  /**
   * Add an element to the front of the deque.
   * @param {Object} element
   */
  addFront = (element) => {
    if(this.isEmpty()) {
      this.addBack(element)
    }
    else if(this.front > 0) {
      this.front--
      this.count++
      this.data[front]   = element
    }
    else {
      for(let i = this.count; i > this.front; i--) {
        this.data[i] = this.data[i - 1]
      }
      this.data[this.front] = element
      this.count++
    }
  }

  /**
   * Add an element to the back of the deque.
   * @param {Object} element
   */
  addBack = (element) => {
    this.data[this.count]  = element
    this.count            += 1
  }

  /**
   * Remove an element from the back of the deque.
   * @returns {Object} element
   */
  removeBack = () => {
    if(this.isEmpty()) return undefined

    const   rear    = this.front + this.count - 1
    const   element = this.data[rear]
    delete  this.data[rear]
    this.count--

    return element
  }

  /**
   * Remove an element from the back of the deque.
   * @returns {Object} element
   */
  removeFront = () => {
    if(this.isEmpty()) return undefined

    const  element = this.data[this.front]
    delete this.data[this.front]
    this.front++
    this.count--

    return element
  }

  /**
   * Return the value of the first element in the deque w/o removing it
   * from the deque
   * @returns {Object} element
   */
  peekFront = () => {
    if(this.isEmpty()) { return undefined }

    return this.data[this.front]
  }

  /**
   * Return the value of the last element in the deque w/o removing it
   * from the deque
   * @returns {Object} element
   */
  peekBack = () => {
    if(this.isEmpty()) { return undefined }

    const   rear  = this.front + this.count - 1
    return  this.data[rear]
  }

  /**
   * Remove all elements from the deque
   */
  clear = () => {
    this.front  = 0
    this.count  = 0
    this.data   = {}
  }

  /**
   * Return true if the deque is empty, otherwise return false
   * @returns {boolean} empty
   */
  isEmpty = () => {
    return this.count === 0 ? true : false
  }

  /**
   * Return the number of elements in the deque.
   * @returns {integer} size
   */
  size = () => {
    return this.count
  }

  /**
   * Returns a string representation of the deque.
   * @returns {String} deque
   */
  toString = () => {
    let arr = []
    Object.keys(this.data).forEach( (key) => {
      arr.push(this.data[key])
    })
    return arr.join(',')
  }
}

// Export the Deque
export default Deque