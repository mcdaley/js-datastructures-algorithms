//-----------------------------------------------------------------------------
// src/datastructures/linked-lists/double-linked-list.js
//-----------------------------------------------------------------------------
import DoubleLinkedList from './double-linked-list'

describe('Double Linked List', () => {
  let list = null
  beforeEach( () => {
    list = new DoubleLinkedList()
    list.insertTail('One')
    list.insertTail('Two')
    list.insertTail('Three')
    list.insertTail('Four')
    list.insertTail('Five')
  })

  describe('insertHead', () => {
    it('Adds an element to the head of an empty list', () => {
      let emptyList = new DoubleLinkedList()
      expect(emptyList.insertHead('Zero')).toBe(true)
      expect(emptyList.size()).toBe(1)
      expect(emptyList.head.element).toBe('Zero')
      expect(emptyList.tail.element).toBe('Zero')
    })

    it('Adds an element to the head of a list', () => {
      expect(list.insertHead('Zero')).toBe(true)
      expect(list.size()).toBe(6)
      expect(list.head.element).toBe('Zero')
      expect(list.tail.element).toBe('Five')
    })
  })

  describe('insertTail', () => {
    it('Adds an element to the tail of an empty list', () => {
      let emptyList = new DoubleLinkedList()
      expect(emptyList.insertTail('Zero')).toBe(true)
      expect(emptyList.size()).toBe(1)
      expect(emptyList.head.element).toBe('Zero')
      expect(emptyList.tail.element).toBe('Zero')
    })

    it('Adds an element to the tail of a list', () => {
      expect(list.insertTail('Six')).toBe(true)
      expect(list.size()).toBe(6)
      expect(list.head.element).toBe('One')
      expect(list.tail.element).toBe('Six')
      expect(list.tail.prev.element).toBe('Five')
    })
  })

  describe('insertAt', () => {
    it('Adds element to the front of an empty list', () => {
      let emptyList = new DoubleLinkedList()

      emptyList.insertAt('One', 0)
      expect(emptyList.size()).toBe(1)
      expect(emptyList.head.element).toBe('One')
      expect(emptyList.tail.element).toBe('One')
    })

    it('Adds element to the front of the list', () => {
      list.insertAt('Zero', 0)
      expect(list.size()).toBe(6)
      expect(list.head.element).toBe('Zero')
      expect(list.head.next.element).toBe('One')
    })

    it('Adds an element to the end of the list', () => {
      expect(list.insertAt('Six', 5)).toBe(true)
      expect(list.size()).toBe(6)
      expect(list.tail.element).toBe('Six')
      expect(list.tail.prev.element).toBe('Five')
    })

    it('Adds an element in the middle of the list', () => {
      expect(list.insertAt('LOREM', 2)).toBe(true)
      expect(list.head.next.element).toBe('Two')
      expect(list.head.next.next.element).toBe('LOREM')
      expect(list.head.next.next.prev.element).toBe('Two')
      expect(list.head.next.next.next.element).toBe('Three')
      expect(list.head.next.next.next.prev.element).toBe('LOREM')
    })
  })

  describe('remove', () => {
    it('Removes an element from the front of the list', () => {
      expect(list.remove('One')).toBe('One')
      expect(list.size()).toBe(4)
      expect(list.head.element).toBe('Two')
    })

    it('Removes an element from the rear of the list', () => {
      expect(list.remove('Five')).toBe('Five')
      expect(list.size()).toBe(4)
      expect(list.tail.element).toBe('Four')
    })

    it('Removes an element from the list', () => {
      expect(list.remove('Two')).toBe('Two')
      expect(list.size()).toBe(4)
      expect(list.head.next.element).toBe('Three')
      expect(list.head.element).toBe('One')
    })

    it('Returns false if element is not in the list', () => {
      expect(list.remove('Seven')).toBe(null)
      expect(list.size()).toBe(5)
    })

    it('Returns false for an empty list', () => {
      let emptyList = new DoubleLinkedList()
      expect(emptyList.remove('Eight')).toBe(null)
      expect(emptyList.size()).toBe(0)
    })
  })

  describe('removeAt', () => {
    it('Removes the 1st element in the list', () => {
      expect(list.removeAt(0)).toBe(true)
      expect(list.head.element).toBe('Two')
      expect(list.size()).toBe(4)
    })

    it('Removes the last element in the list', () => {
      expect(list.removeAt(5)).toBe(true)
      expect(list.tail.element).toBe('Four')
      expect(list.size()).toBe(4)
    })

    it('Removes an element from the list', () => {
      expect(list.removeAt(2)).toBe(true)
      expect(list.size()).toBe(4)
      expect(list.head.next.next.element).toBe('Three')
      expect(list.tail.prev.prev.prev.element).toBe('One')
    })

    it('Does not remove element if index > number of elements in the list', () => {
      expect(list.removeAt(8)).toBe(false)
      expect(list.size()).toBe(5)
    })
  })

  describe('removeHead', () => {
    it('Removes the 1st element in the list', () => {
      expect(list.removeHead()).toBe('One')
      expect(list.head.element).toBe('Two')
      expect(list.size()).toBe(4)
    })

    it('Removes element when list size = 1', () => {
      let singleList = new DoubleLinkedList()
      singleList.insertHead('One')
      expect(singleList.removeHead()).toBe('One')
      expect(singleList.head).toBe(null)
      expect(singleList.tail).toBe(null)
      expect(singleList.size()).toBe(0)
    })

    it('Removes element when list size = 2', () => {
      let singleList = new DoubleLinkedList()
      singleList.insertTail('One')
      singleList.insertTail('Two')

      expect(singleList.removeHead()).toBe('One')
      expect(singleList.head.element).toBe('Two')
      expect(singleList.tail.element).toBe('Two')
      expect(singleList.size()).toBe(1)
    })
  })

  describe('removeTail', () => {
    it('Removes the last element from a list', () => {
      let element = list.removeTail()
      expect(element).toBe('Five')
      expect(list.size()).toBe(4)
      expect(list.tail.element).toBe('Four')
    })

    it('Removes element and clears list when list has 1 element', () => {
      let singleList = new DoubleLinkedList()
      singleList.insertHead('One')

      expect(singleList.removeTail()).toBe('One')
      expect(singleList.size()).toBe(0)
      expect(singleList.head).toBe(null)
      expect(singleList.tail).toBe(null)
    })

    it('Removes last element and sets head == tail from list w/ 2 elements', () => {
      let doubleList = new DoubleLinkedList()
      doubleList.insertTail('One')
      doubleList.insertTail('Two')

      let element = doubleList.removeTail()
      expect(element).toBe('Two')
      expect(doubleList.size()).toBe(1)
      expect(doubleList.tail.element).toBe('One')
      expect(doubleList.head.element).toBe('One')
    })
  })

  describe('indexOf', () => {
    it('Returns the index of the element in the list', () => {
      expect(list.indexOf('One')).toBe(0)
      expect(list.indexOf('Three')).toBe(2)
      expect(list.indexOf('Five')).toBe(4)
    })

    it('Returns -1 if the element is not in the list', () => {
      expect(list.indexOf('Seven')).toBe(-1)
    })
  })

  describe('peekHead', () => {
    it('Returns the value of the first element in the list', () => {
      expect(list.peekHead()).toBe('One')
      expect(list.size()).toBe(5)
      expect(list.head.element).toBe('One')
    })
  })

  describe('peekTail', () => {
    it('Returns the value of the last element in the list', () => {
      expect(list.peekTail()).toBe('Five')
      expect(list.size()).toBe(5)
      expect(list.tail.element).toBe('Five')
    })
  })

  describe('isEmpty()', () => {
    it('Returns true for non-empty list', () => {
      expect(list.isEmpty()).toBe(false)
    })

    it('Returns true for an empty list', () => {
      let emptyList = new DoubleLinkedList()
      expect(emptyList.isEmpty()).toBe(true)
    })
  })

  describe('size()', () => {
    it('Returns the number of elements in the list', () => {
      expect(list.size()).toBe(5)
      
      list.removeHead()
      expect(list.size()).toBe(4)

      list.removeTail()
      expect(list.size()).toBe(3)
    })

    it('Returns true for an empty list', () => {
      let emptyList = new DoubleLinkedList()
      expect(emptyList.size()).toBe(0)
    })
  })

  describe('clear', () => {
    it('Removes all elements from the list', () => {
      list.clear()
      expect(list.size()).toBe(0)
      expect(list.head).toBe(null)
      expect(list.tail).toBe(null)
    })
  })

  describe('toString', () => {
    it('Returns the list as a string', () => {
      expect(list.toString()).toBe('One,Two,Three,Four,Five')
    })
  })
})