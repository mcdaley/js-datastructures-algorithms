//-----------------------------------------------------------------------------
// src/linked-lists/linked-list.js
//-----------------------------------------------------------------------------
import { defaultEquals }  from '../utils/utils'
import { Node }           from '../models/linked-list-models'

/**
 * Linked list datastructure for managing a collection of elements.
 */
export default class LinkedList {
  constructor(equalsFn = defaultEquals) {
    this.count    = 0
    this.head     = null
    this.equalsFn = equalsFn
  }

  /**
   * Add an element to the end of the list.
   */
  push = (element) => {
    let node = new Node(element)

    if(this.head === null) {
      this.head = node
      
    }
    else {
      let current = this.head
      while(current.next !== null) {
        current = current.next
      }
      current.next = node
    }
    this.count++  
  }

  /**
   * Insert an element at a specified index in the list, where the
   * first element in the list starts at index zero, similar to arrays.
   */
  insert = (element, index) => {
    if (index >= 0 && index > this.count) return false

    let node = new Node(element)

    if (index === 0) {
      node.next = this.head
      this.head = node
    }
    else {
      let current   = this.head
      let previous  = null

      for(let i = 0; i < index; i++) {
        previous  = current
        current   = current.next
      }
      previous.next = node
      node.next     = current.next
    }
    this.count++

    return true
  }

  /**
   * Remove a specified element from the list. If the element is found then
   * remove it from the list and return it. Otherwise, return null.
   * 
   * NOTE: Does the return the element or a boolean?
   * 
   * @param   {Object}  element
   * @return  {Boolean} True if the object is removed
   */
  remove = (element) => {
    if (this.count === 0) return false

    let current   = this.head
    let previous  = null
    let found     = false

    if (this.equalsFn(this.head.element, element)) {
      this.head = current.next
      found     = true
      current   = null
      this.count--
    }
    else {
      while(!found && current !== null) {
        if (this.equalsFn(current.element, element)) {
          found = true
        }
        else {
          previous = current
          current  = current.next
        }
      }

      if (found) {
        previous.next = current.next
        current       = null
        this.count--
      }
    }
    return found
  }

  /**
   * Removes an element at a specified index and returns it, where the
   * index starts at 0, similar to arrays. If the list is empty() or the
   * index is not in range then null is returned. 
   * 
   * @param   {Integer} index
   * @return  {Object}  element
   */
  removeAt = (index) => {
    if (this.count === 0)                 return null
    if (index < 0 || index > this.count)  return null

    let element = null
    let current = this.head

    if (index === 0) {
      this.head = current.next
    }
    else {
      let previous = null

      for (let i = 0; i < index; i++) {
        previous  = current
        current   = current.next
      }
      previous.next = current.next
    }
    element = current.element
    current = null
    this.count--

    return element
  }

  /**
   * Return the head of the list.
   */
  getHead = () => {
    return this.head
  }

  /**
   * Returns the index of an element in the list, if the element is not in 
   * the list it returns -1.
   * @param   {Object}  element
   * @return  {Integer} Index of the element
   */
  indexOf = (element) => {
    let index   = 0
    let current = this.head
    let found   = false

    while(!found && current !== null) {
      if(this.equalsFn(current.element, element)) {
        found = true
      }
      else {
        current = current.next
        index++
      }
    }
    return found ? index : -1
  }

  /**
   * Returns true if the list is empty, otherwise it returns false.
   * @return {Boolean} True if list is empty, otherwise false
   */
  isEmpty = () => {
    return this.count === 0
  }

  /**
   * Returns the number of elements in the list.
   * @return {Integer} Number of elements in the list.
   */
  size = () => {
    return this.count
  }

  /**
   * Returns a string representation of the list.
   * @return {String} string representation of the linked list
   */
  toString = () => {
    let elementsArr = []
    let current     = this.head

    while(current !== null) {
      elementsArr.push(current.element)
      current = current.next
    }
    return elementsArr.join(',')
  }
}
