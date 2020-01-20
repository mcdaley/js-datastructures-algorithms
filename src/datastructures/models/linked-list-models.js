//-----------------------------------------------------------------------------
// src/models/linked-lists.models.js
//-----------------------------------------------------------------------------

/**
 * Stores elements of a linked list.
 * @param {Object} element
 */
export class Node {
  constructor(element = null) {
    this.element  = element,
    this.next     = null
  }
}
