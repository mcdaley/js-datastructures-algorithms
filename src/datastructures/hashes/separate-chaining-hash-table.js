//-----------------------------------------------------------------------------
// src/datastructures/hashees/separate-chaining-hash-table.js
//-----------------------------------------------------------------------------
import  LinkedList          from '../linked-lists/linked-list'
import  { defaultToString } from '../utils/utils'
import  { ValuePair }       from '../models/data-models'

/**
 * HashTable implementation that handles collisions by adding the [key,value]
 * pairs with the same hashcode to a linked list.
 */
export class HashTableSeparateChaining {
  constructor(toStringFn = defaultToString) {
    this.toStringFn = toStringFn
    this.table      = {}
  }

  /**
   * Add a [key,value] pair to the hashtable.
   * @param  {String}  key
   * @param  {Object}  value
   * @return {Boolean} Returns true if [key,value] added, else false.
   */
  put = (key, value) => {
    if(key == null || value == null) return false

    const position = this.hashCode(key)
    if(!this.table.hasOwnProperty(position)) {
      this.table[position] = new LinkedList()
    }

    this.table[position].push(new ValuePair(key, value))
    return true
  }

  /**
   * Return the value for a key in the hastable. If the [key.value] is not 
   * found then return undefined.
   * @param  {String} key
   * @return {Object} Return the value
   */
  get = (key) => {
    /**
     * Find the value in the linked-list for the key.
     * @param  {String} key 
     * @return {Object} Returns the value if found, else return undefined
     */
    function findValue(key) {
      let current = linkedList.getHead()
      let value   = undefined
      let found   = false

      while(!found && current != null) {
        if(current.element.key === key)
        {
          value   = current.element.value
          found   = true
        }
        current = current.next
      }
      return value
    }

    // Search for the value in the hash table.
    const position    = this.hashCode(key)
    const linkedList  = this.table[position]
    if(linkedList == null || linkedList.isEmpty()) {
      return undefined
    }

    const  value      = findValue(key)    
    return value
  }

  /**
   * Remove a [key,value] pair from the hashtable.
   * @param  {String}  key
   * @return {Boolean} Return true if [key,value] removed, else false.
   */
  remove = (key) => {
    /**
     * Remove the value from the hash table if it is found
     * @return {Boolean} Return true if removed [key,value], else return false
     */
    const removeValue = () => {
      let current = linkedList.getHead()
      let removed = false

      while(!removed && current != null) {
        if(current.element.key === key) {
          linkedList.remove(current.element)
          if(linkedList.isEmpty()) {
            delete this.table[position]
          }
          removed = true
        }
        current = current.next
      }
      return removed
    }

    // Remove the element from the hash table.
    const position    = this.hashCode(key)
    const linkedList  = this.table[position]

    if(linkedList == null || linkedList.isEmpty()) {
      return false
    }

    const  result = removeValue(this)
    return result
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
export default HashTableSeparateChaining