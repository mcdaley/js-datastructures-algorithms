//-----------------------------------------------------------------------------
// src/datastructures/queues/deque.test.js
//-----------------------------------------------------------------------------
import Deque from './deque'

describe('Deque', () => {
  describe('AddBack', () => {
    it('Adds an element to the front of the queue', () => {
      let deque = new Deque()
      
      deque.addBack('One')
      expect(deque.count).toBe(1)
      expect(deque.data).toEqual({'0': 'One'})

      deque.addBack('Two')
      expect(deque.count).toBe(2)
      expect(deque.data).toEqual({'0': 'One', '1': 'Two'})
    })
  })

  describe('AddFront', () => {
    it('Adds an element to the queue', () => {
      let deque = new Deque()
      deque.addFront('One')
      expect(deque.data).toEqual({'0': 'One'})

      deque.addFront('Two')
      expect(deque.data).toEqual({'0': 'Two', '1': 'One'})
    })
  })

  describe('RemoveBack', () => {
    it('Removes the last element in the queue', () => {
      let deque = new Deque()
      deque.addBack('One')
      deque.addBack('Two')
      deque.addBack('Three')
      deque.addBack('Four')
      deque.addBack('Five')

      expect(deque.removeBack()).toBe('Five')
      expect(deque.removeBack()).toBe('Four')
      expect(deque.removeFront()).toBe('One')    // Shift deque.front
      expect(deque.removeBack()).toBe('Three')
      expect(deque.removeBack()).toBe('Two')
      expect(deque.removeBack()).toBe(undefined)
    })

    it('Returns undefined for an empty deque', () => {
      let emptyDeque = new Deque()
      expect(emptyDeque.removeBack()).toBe(undefined)
    })
  })

  describe('RemoveFront', () => {
    it('Removes the first element in the queue', () => {
      let deque = new Deque()
      deque.addFront('One')
      deque.addFront('Two')
      deque.addFront('Three')

      expect(deque.removeFront()).toBe('Three')
      expect(deque.removeFront()).toBe('Two')
      expect(deque.removeFront()).toBe('One')
    })

    it('Returns undefined for an empty deque', () => {
      let emptyDeque = new Deque()
      expect(emptyDeque.removeFront()).toBe(undefined)
    })
  })

  describe('PeekFront', () => {
    it('Returns the first element in deque w/o removing it', () => {
      let deque = new Deque()
      deque.addFront('One')
      deque.addFront('Two')
      deque.addFront('Three')

      expect(deque.peekFront()).toBe('Three')
      expect(deque.size()).toBe(3)

      deque.removeFront()
      expect(deque.peekFront()).toBe('Two')
      expect(deque.size()).toBe(2)
    })

    it('Returns undefined for an empty deque', () => {
      let emptyDeque = new Deque()
      expect(emptyDeque.peekFront()).toBe(undefined)
    })
  })

  describe('PeekRear', () => {
    it('Returns the last element in the deque w/o removing it', () => {
      let deque = new Deque()
      deque.addBack('One')
      deque.addBack('Two')
      deque.addBack('Three')
      deque.addBack('Four')

      expect(deque.peekBack()).toBe('Four')
      expect(deque.size()).toBe(4)

      deque.removeBack()
      expect(deque.peekBack()).toBe('Three')
      expect(deque.size()).toBe(3)

      deque.removeFront()
      expect(deque.peekBack()).toBe('Three')
      expect(deque.size()).toBe(2)
    })
  })

  describe('Clear', () => {
    it('Removes all the elements from the deque', () => {
      let deque = new Deque()
      deque.addBack('One')
      deque.addBack('Two')
      deque.clear()
      expect(deque.size()).toBe(0)
      expect(deque.front).toBe(0)
      expect(deque.data).toEqual({})
    })
  })

  describe('IsEmpty', () => {
    it('Returns true if the deque is empty', () => {
      let emptyDeque = new Deque()
      expect(emptyDeque.isEmpty()).toBe(true)
    })
  })

  describe('Size', () => {
    it('Returns the size of the deque', () => {
      let deque = new Deque()
      
      expect(deque.size()).toBe(0)

      deque.addFront('One')
      deque.addBack('Two')
      expect(deque.size()).toBe(2)
    })
  })

  describe('It returns a string representation of the deque', () => {
    let deque = new Deque()
    deque.addBack('One')
    deque.addBack('Two')

    expect(deque.toString()).toBe('One,Two')
  })
})