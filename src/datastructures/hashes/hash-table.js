//-----------------------------------------------------------------------------
// src/datastructures/hashes/hash-table.js
//-----------------------------------------------------------------------------
import { defaultToString }  from '../utils/utils'
import { ValuePair }        from '../models/data-models'

/**
 * 
 */
export class HashTable {
  constructor(toStringFn = defaultToString) {
    this.toStringFn = defaultToString
    this.table      = {}
  }

  /**
   * Add a [key, value] pair to the hash table. If the key already exists in 
   * the hash table then it is overwritten.
   * @param  {Object}  key
   * @param  {Object}  value
   * @return {Boolean} True if [key,value] added to the hash else false.
   */
  put = (key, value) => {
    if( key == null || value == null) return false

    const hash        = this.hashCode(key)
    const valuePair   = new ValuePair(key, value)
    this.table[hash]  = valuePair

    return true
  }

  /**
   * Remove a [key,value] pair from the hashtable.
   */
  remove = (key) => {
    if(key == null) return false

    const hash = this.hashCode(key)
    if(this.table.hasOwnProperty(hash)) {
      delete this.table[hash]
      return true
    }

    return false
  }

  /**
   * Get the value for the key from the hashtable else return undefined.
   * @param  {Object} key
   * @retrun {Object} Value in hashtable for the key.
   */
  get = (key) => {
    if(key == null) return null

    const valuePair = this.table[this.hashCode(key)]
    if(valuePair == null) {
      return undefined
    }

    return valuePair.value
  }

  /**
   * Return true if hashtable is empty, otherwise return false.
   */
  isEmpty = () => {
    return Object.keys(this.table).length === 0 ? true : false
  }

  /**
   * Return a string representation of the object.
   */
  toString = () => {
    if(this.isEmpty()) return ''

    const keys      = Object.keys(this.table)
    let   objString = `{${keys[0]} => ${this.table[keys[0]].toString()}}`
    for(let i = 1; i < keys.length; i++) {
      objString = `${objString},\n{${keys[i]} => ${this.table[keys[i]].toString()}}`
    }
    return objString
  }

  /**
   * Convert the key to a hash code.
   * @param  {Object} key
   * @return {String} Hashcode for the key.
   */
  hashCode = (key) => {
    return this.loseloseHashCode(key)
  }

  /**
   * Simple hashing algorithm that sums up the value of each character. This
   * is not receommended for production code.
   * @param  {Object} key
   * @return {String} Hashcode for the key.
   */
  loseloseHashCode = (key) => {
    if(typeof key === 'number') return key

    const tableKey  = this.toStringFn(key)
    let   hash      = 0
    for(let i = 0; i < tableKey.length; i++) {
      hash += tableKey.charCodeAt(i)
    }
    return hash % 37
  }
}

// Export the HashTable
export default HashTable