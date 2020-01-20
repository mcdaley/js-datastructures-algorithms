//-----------------------------------------------------------------------------
// src/linked-lists/linked-list.test.js
//-----------------------------------------------------------------------------
import LinkedList from  './linked-list'

describe('LinkedList', () => {
  let list = null
  beforeEach( () => {
    list = new LinkedList()
    list.push('One')
    list.push('Two')
    list.push('Three')
    list.push('Four')
    list.push('Five')
  })

  describe('push', () => {
    it('Adds an element to the end of a list', () => {
      let pushList = new LinkedList()
      pushList.push('One')
      pushList.push('Two')
      expect(pushList.count).toBe(2)
      expect(pushList.head.element).toBe('One')
      expect(pushList.head.next.element).toBe('Two')
    })
  })

  describe('insert', () => {
    it('Adds element to front when index is zero', () => {
      list.insert('Zero', 0)
      expect(list.head.element).toBe('Zero')
      expect(list.head.next.element).toBe('One')
      expect(list.count).toBe(6)
    })

    it('Adds an element at a specific position', () => {
      list.insert('Fido', 3)
      expect(list.count).toBe(6)
      expect(list.head.next.element).toBe('Two')
      expect(list.head.next.next.element).toBe('Three')
      expect(list.head.next.next.next.element).toBe('Fido')
    })
  })

  describe('remove', () => {
    it('Removes the first element in a list', () => {
      expect(list.remove('One')).toBe(true)
      expect(list.count).toBe(4)
      expect(list.head.element).toBe('Two')
    })

    it('Removes an element from the list', () => {
      expect(list.remove('Two')).toBe(true)
      expect(list.count).toBe(4)
      expect(list.head.next.element).toBe('Three')
    })

    it('Returns false if the element is not in the list', () => {
      expect(list.remove('XXXX')).toBe(false)
      expect(list.count).toBe(5)
    })
  })

  describe('removeAt', () => {
    it('Removes an element from the front of the list', () => {
      let element = list.removeAt(0)

      expect(element).toBe('One')
      expect(list.count).toBe(4)
      expect(list.head.element).toBe('Two')
    })

    it('Removes an element from the list', () => {
      let element = list.removeAt(2)

      expect(element).toBe('Three')
      expect(list.count).toBe(4)
    })

    it('Returns null if the index is not in the list', () => {
      expect(list.removeAt(10)).toBe(null)
      expect(list.removeAt(-1)).toBe(null)
    })

    it('Returns null for an empty list', () => {
      let emptyList = new LinkedList()
      expect(emptyList.removeAt(0)).toBe(null)
    })
  })

  describe('indexOf', () => {
    it('Returns the index of an element in the list', () => {
      expect(list.indexOf('One')).toBe(0)
      expect(list.indexOf('Three')).toBe(2)
      expect(list.indexOf('Five')).toBe(4)
    })

    it('Returns -1 when the element is not in the list', () => {
      expect(list.indexOf('Bad Record')).toBe(-1)
    })

    it('Returns -1 for an empty list', () => {
      let emptyList = new LinkedList()
      expect(emptyList.indexOf('Empty')).toBe(-1)
    })
  })

  describe('isEmpty', () => {
    it('Returns false for list w/ elements', () => {
      expect(list.isEmpty()).toBe(false)
    })

    it('Returns true for an empty list', () => {
      let emptyList = new LinkedList()
      expect(emptyList.isEmpty()).toBe(true)
    })
  })

  describe('size', () => {
    it('Returns number of elements in list', () => {
      expect(list.size()).toBe(5)
    })

    it('Returns zero for an empty list', () => {
      let emptyList = new LinkedList()
      expect(emptyList.size()).toBe(0)
    })
  })

  describe('toString', () => {
    it('Returns a string representation of the linked list', () => {
      expect(list.toString()).toBe('One,Two,Three,Four,Five')
    })
  })
})