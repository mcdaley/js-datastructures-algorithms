//-----------------------------------------------------------------------------
// src/datastructures/hashes/dictionary.js
//-----------------------------------------------------------------------------
import { defaultToString }  from '../utils/utils'
import { ValuePair }        from '../models/data-models'

/**
 * Dictionary implementation that provides a key/value store. The dictionary
 * stores the [key,value] pairs as table[key] = {key, value}. Need to convert
 * the table[key] as a string and then store the actual key in the object.
 * 
 * @param {Function} defaultToString - A toString() implementation for the keys.
 */
export class Dictionary {
  constructor(toStringFn = defaultToString) {
    this.toStringFn = toStringFn
    this.table      = {}
  }

  /** 
   * Add a new element to the dictionary. If the key already exists, the existing
   * value will be overwritten with the new value.
   * @param  {Object}  key
   * @param  {Object}  value
   * @return {Boolean} True if [key,value] pair added to dictionary.
   */
  set = (key, value) => {
    if (key == null && value == null) return false
    
    this.table[this.toStringFn(key)] = new ValuePair(key, value)
    return true
  }

  /**
   * Removes the value from the dictionary using the key.
   * @param  {Object}  key
   * @return {Boolean} True is key/value deleted, otherwise false.
   */
  remove = (key) => {
    if(this.hasKey(key)) {
      delete this.table[this.toStringFn(key)]
      return true
    }

    return false
  }

  /**
   * Returns true is the key exists in the dictionary and false otherwise.
   * @param  {Object}  key
   * @return {Boolean} True is dictionary has key, otherwise false.
   */
  hasKey = (key) => {
    return this.table.hasOwnProperty(this.toStringFn(key)) ? true : false
  }

  /**
   * Returns the value in the dictionary for the key.
   * @param  {Object} key
   * @return {Object} Returns value if key exists in dictionary
   */
  get = (key) => {
    if (!this.hasKey(key)) return null

    const  value = this.table[this.toStringFn(key)].value
    return value
  }

  /**
   * Returns the number of values in the dictionary.
   * @return {Integer} Number of values in the dictionary.
   */
  size = () => {
    return Object.keys(this.table).length
  }

  /**
   * Returns true is the dictionary has zero values in it, otherwise 
   * returns false.
   * @return {Boolean} True if dictionary is empty, otherwise false.
   */
  isEmpty = () => {
    return this.size() === 0 ? true : false
  }

  /**
   * Removes all values from the dictionary.
   */
  clear = () => {
    this.table = {}
  }

  /**
   * Returns an array of all the keys in the dictionary.
   * @return {Array} Array of all the dictionary keys.
   */
  keys = () => {
    return Object.keys(this.table).map( (k) => this.table[k].key)
  }

  /**
   * Returns an array of all values in the dictionary.
   * @return {Array} Array of all the values in the dictionay
   */
  values = () => {
    return Object.keys(this.table).map( k => this.table[k].value)
  }

  /**
   * Returns an array of all [key, value] pairs in the dictionary.
   * @return {Array} Array of all [key,value] pairs in the dictionary.
   */
  keyValues = () => {
    return Object.keys(this.table).map( (k) => {
      return {key: this.table[k].key, value: this.table[k].value}
    })
  }

  /**
   * Return a string representation of the dictionary.
   * @return {String}
   */
  toString = () => {
    if(this.isEmpty())  return ''

    let valuePairs  = []
    Object.values(this.table).forEach( (vp) => {
      valuePairs.push(vp)
    })
    return valuePairs.join(',')
  }

  /**
   * Iterates every [key, value] pair in the dictionary. The **callbackFn**
   * function has two parameters: "key" and "value". This method can also
   * be interrupted in case the callback function returns false (similar to 
   * the "every" method from the "Array" class)
   * @param  {Function} callbackFn
   * @return {Boolean}  True if all callbacks return true, break when callback returns false
   */
  forEach = (callbackFn) => {
    const valuePairs = this.keyValues()
    for(let i = 0; i < valuePairs.length; i++) {
      const result = callbackFn(valuePairs[i].key, valuePairs[i].value)
      if(result === false) {
        break     // Exit loop if callback returns false.
      }
    }
    return true
  }
}

// Export the Dictionary
export default Dictionary