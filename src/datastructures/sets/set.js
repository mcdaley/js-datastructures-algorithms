//-----------------------------------------------------------------------------
// src.datastructures/sets/set.js
//-----------------------------------------------------------------------------

/**
 * Set of unique objects that represents the finite mathematical set.
 */
export class Set {
  constructor() {
    this.items = {}
  }

  /**
   * Add an element to the set and return true. If the element is already
   * in the set then return false.
   * @param  {Objec}   element
   * @return {Boolean} True if element is added, otherwise false.
   */
  add = (element) => {
    // Return false is element is in the set.
    if (this.has(element)) return false
    
    this.items[element] = element
    return true
  }

  /**
   * Removes an element from the set and returns true. If the element is not in
   * the set it returns false.
   * @param  {Object}  element
   * @return {Boolean} True if element is removed, otherwise false.
   */
  delete = (element) => {
    // Return false is element is not in the set.
    if(!this.has(element)) return false
    
    delete this.items[element]
    return true
  }

  /** 
   * Check to see if an element is in the set.
   * @param  {Object}  element
   * @return {Boolean} True if element is in the set, otherwise false.
   */
  has = (element) => {
    return this.items.hasOwnProperty(element)
  }

  /**
   * Removes all the elements from the set.
   */
  clear = () => {
    this.items = {}
  }

  /**
   * Returns the number of elements in the set.
   * @return {Integer} Number of elements in the set.
   */
  size = () => {
    return Object.keys(this.items).length
  }

  /**
   * Returns an array of all the values/elements in the set.
   * @return {Array} Array of elements in the set.
   */
  values = () => {
    return Object.values(this.items)
  }
}

// Export the Set
export default Set