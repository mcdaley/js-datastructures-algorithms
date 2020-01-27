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

/**
 * Stores elements for a double linked list.
 * @param {Object} element
 */
export class DoubleLinkedNode {
  constructor(element = null, next = null, prev = null) {
    this.element  = element
    this.next     = null
    this.prev     = null
  }
}
