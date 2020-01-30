//-----------------------------------------------------------------------------
// src/datastructures/sets/set.js
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

  /**
   * Given 2 sets, returns a new set of elements from both sets.
   * @param  {Set} otherSet
   * @return {Set} Union of 2 sets.
   */
  union = (otherSet) => {
    let unionSet = new Set()
    this.values().forEach( value => unionSet.add(value) )
    otherSet.values().forEach( (value) => {
      if (!unionSet.has(value)) {
        unionSet.add(value)
      }
    })

    return unionSet
  }

  /**
   * Given 2 sets, returns a new set with the elements that exist in both sets.
   * @param  {Set} otherSet
   * @return {Set} Intersection of 2 sets.
   */
  intersection = (otherSet) => {
    let intersectionSet = new Set()
    
    this.values().forEach( (value) => {
      if (otherSet.has(value)) {
        intersectionSet.add(value)
      }
    })

    return intersectionSet
  }

  /**
   * Given 2 sets, returns a new a set with all the elements that exist in the
   * 1st set and do not exist in the 2nd set.
   * @param  {Set} otherSet
   * @return {Set} Difference between the sets.
   */
  difference = (otherSet) => {
    let differenceSet = new Set()
    this.values().forEach( (value) => {
      if (!otherSet.has(value)) {
        differenceSet.add(value)
      }
    })

    return differenceSet
  }

  /**
   * Determines if the current (i.e., "this") is a subset of otherSet 
   * passed in as a param.
   * @param  {Set}     otherSet
   * @return {Boolean} True is set is subset of otherSet
   */
  subset = (otherSet) => {
    if(this.size() > otherSet.size()) return false

    /**
     * Verify if every value in this.items is in the otherSet. The 
     * Array.prototype.every() method returns true of all the elements are
     * in the set, otherwise it returns false.
     */
    let subset = this.values().every( (value) => {
      if (otherSet.has(value)) {
        return true
      }
      else {
        return false
      }
    })

    return subset
  }
}

// Export the Set
export default Set