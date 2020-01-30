//-----------------------------------------------------------------------------
// src/models/data-models.js
//-----------------------------------------------------------------------------

/**
 * Data model for storing [key, value] pairs for dictionaries
 * and hashses.
 * @param {Object} key    - Unique key for indexing node.
 * @param {Object} value  - Value of he node.
 */
export class ValuePair {
  constructor(key, value) {
    this.key    = key
    this.value  = value
  }

  toString = () => {
    return `[${this.key}: ${this.value}]`
  }
}