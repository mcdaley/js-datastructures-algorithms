//-----------------------------------------------------------------------------
// src/datastructures/linked-lists/double-linked-list.js
//-----------------------------------------------------------------------------
import { DoubleLinkedNode as Node } from '../models/linked-list-models'
import { defaultEquals }            from '../utils/utils'

/**
 * Double linked list that allows users to move forward and backward through
 * the list.
 * @param {Function} equalsFn - Function to test for equality for list elements.
 */
export default class DoubleLinkedList {
  constructor(equalsFn = defaultEquals) {
    this.head     = null
    this.tail     = null
    this.count    = 0
    this.equalsFn = equalsFn
  }

  /**
   * Insert an element at the head of the list.
   * @param   {Object}  element
   * @return  {Boolean} True if element is added to the head of the list
   */
  insertHead = (element) => {
    let node = new Node(element)

    if(this.head === null) {
      this.head = this.tail = node
    }
    else {
      let current   = this.head
      node.next     = current
      current.prev  = node
      this.head     = node
    }
    this.count++

    return true
  }

  /**
   * Add an element to the end of the double linked list.
   * @param   {Object}  element
   * @return  {Boolean} True if element is added to the end of the list.
   */
  insertTail = (element) => {
    let node = new Node(element)

    if(this.tail === null) {
      this.head = node
      this.tail = node
    }
    else {
      let current   = this.tail
      current.next  = node
      node.prev     = current
      this.tail     = node
    }
    this.count++

    return true
  }

  /**
   * Insert an element at a specified position in the list, where the 1st
   * element in the list is at index = 0.
   * @param   {Object}  element
   * @param   {Integer} index
   * @return  {Boolean} True if the elements is inserted into the list.
   */
  insertAt = (element, index) => {
    if (index > this.count) return false

    let node    = new Node(element)
    let current = this.head

    if (index === 0) {
      if (this.head === null) {
        this.head = node
        this.tail = node
      }
      else {
        node.next     = current
        current.prev  = node
        this.head     = node
      }
    }
    else if (index === this.count) {
      current       = this.tail
      node.prev     = current
      current.next  = node
      this.tail     = node
    }
    else {
      for(let i = 0; i < index; i++) {
        current = current.next
      }
      let previous  = current.prev
      node.next     = current
      current.prev  = node
      previous.next = node
      node.prev     = previous
    }
    this.count++

    return true
  }

  /**
   * Remove an element from the list and return it. If the element is not
   * found then return null
   * @param   {Object}  element
   * @return  {Object}  Return the element
   */
  remove = (element) => {
    if (this.isEmpty()) return null

    let current   = this.head
    let previous  = null
    let data      = null

    if (this.equalsFn(this.head.element, element)) {
      data = this.removeHead()
    }
    else if (this.equalsFn(this.tail.element, element)) {
      data = this.removeTail() 
    }
    else {
      let found = false
      while(!found && current !== null) {
        if (this.equalsFn(current.element, element)) {
          data              = current.element
          previous.next     = current.next
          current.next.prev = previous
          found             = true
          this.count--
        }
        else {
          previous = current
          current  = current.next
        }
      }
    }
    
    return data
  }

  /**
   * Remove an element from a specfic position in the list.
   * @param  {Integer} index
   * @return {Bolean}  Return true if element is removed from the list.
   */
  removeAt = (index) => {
    if (index > this.size()) return false

    let current   = this.head
    let previous  = null

    if(index === 0) {
      this.removeHead()
    }
    else if (index = this.size()) {
      this.removeTail()
    }
    else {
      for(let i = 0; i < index; i++) {
        previous = current
        current  = current.next
      }
      previous.next     = current.next
      current.next.prev = previous
      this.count--
    }
    current = null

    return true
  }

  /**
   * Remove the first element in the list. Need to make sure that I correctly
   * assign the head and tail when removing the 1st element of the list.
   * @return {Object} element
   */
  removeHead = () => {
    if(this.isEmpty()) return null

    let element = this.head.element

    if(this.size() == 1) {
      this.clear()
    }
    else {
      let current     = this.head
      this.head       = this.head.next
      this.head.prev  = null
      current         = null
      this.count--
    }

    return element
  }

  /**
   * Remove the last element from the list and return it, if the list
   * is empty then return null.
   * @return {Object} Last element in the list.
   */
  removeTail = () => {
    if (this.isEmpty()) return null

    let element = this.tail.element

    if (this.size() === 1) {
      this.clear()
    }
    else {
      let current     = this.tail
      this.tail       = this.tail.prev
      this.tail.next  = null
      current         = null
      this.count--
    }
    return element
  }

  /**
   * Search for an element in the list and if it is found then return the
   * position/index of the element in the list. If the element is not found
   * return -1.
   * @param {Object}    element
   * @return {Integer}  Position of the element in the list.
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
   * Returns the first element in the list w/o modifying the list.
   * @return {Object} First element in the list
   */
  peekHead = () => {
    return this.head !== null ? this.head.element : null
  }

  /**
   * Returns the last element in the list w/o modifying the list.
   * @return {Object} Last element in the list
   */
  peekTail = () => {
    return this.tail !== null ? this.tail.element : null
  }

  /**
   * Returns true if the list has zero elements, otherwise it returns true.
   * @return {Boolean}
   */
  isEmpty = () => {
    return this.count === 0
  }

  /**
   * Returns the number of elements in the list.
   * @return {Integer}
   */
  size = () => {
    return this.count
  }

  /**
   * Removes all the elements from the list.
   */
  clear = () => {
    this.head   = null
    this.tail   = null
    this.count  = 0
  }

  /**
   * Returns a string representation of the list.
   * @return {String}
   */
  toString = () => {
    let arr = []
    let current = this.head
    while(current !== null) {
      arr.push(current.element)
      current = current.next
    }
    return arr.join(',')
  }

  /**
   * Iterate through a list and apply a function to each element in the
   * list.
   * @param {Function} fn
   */
  forEach = (fn) => {
    let current = this.head
    while(current !== null) {
      fn(current.element)
      current = current.next
    }
  }
}