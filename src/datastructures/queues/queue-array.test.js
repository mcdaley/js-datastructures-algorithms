//-----------------------------------------------------------------------------
// src/datastructures/queues/queue-array.text.js
//-----------------------------------------------------------------------------
import QueueArray from './queue-array'

describe('QueueArray', () => {
  let queue = null
  beforeEach(() => {
    queue = new QueueArray()
    queue.enqueue('One')
    queue.enqueue('Two')
    queue.enqueue('Three')
  })

  describe('Enqueue', () => {
    it('Adds an item to the back of the queue', () => {
      expect(queue.data.length).toBe(3)
      expect(queue.data[0]).toBe('One')
      expect(queue.data[1]).toBe('Two')
      expect(queue.data[2]).toBe('Three')
    })
  })

  describe('Dequeue', () => {
    it('Returns the first element in the queue', () => {
      expect(queue.dequeue()).toBe('One')
      expect(queue.size()).toBe(2)

      expect(queue.dequeue()).toBe('Two')
      expect(queue.size()).toBe(1)

      expect(queue.dequeue()).toBe('Three')
      expect(queue.size()).toBe(0)

      expect(queue.dequeue()).toBe(null)
    })

    it('Returns null for an empty queue', () => {
      let emptyQueue = new QueueArray()
      expect(emptyQueue.dequeue()).toBe(null)
    })
  })

  describe('Peek', () => {
    it('Returns the first element and does not change the queue size', () => {
      expect(queue.peek()).toBe('One')
      expect(queue.size()).toBe(3)
    })

    it('Returns null for empty queue', () => {
      let emptyQueue = new QueueArray()
      expect(emptyQueue.peek()).toBe(null)
      expect(emptyQueue.size()).toBe(0)
    })
  })

  describe('IsEmpty', () => {
    it('Returns true for an empty queue', () => {
      let emptyQueue = new QueueArray()
      expect(emptyQueue.isEmpty()).toBe(true)
    })

    it('Returns false for a non-empty queue', () => {
      expect(queue.isEmpty()).toBe(false)
    })
  })

  describe('Size', () => {
    it('Returns the number of elements in a queue', () => {
      expect(queue.size()).toBe(3)
    })

    it('Returns zero for an empty queue', () => {
      let emptyQueue = new QueueArray()
      expect(emptyQueue.size()).toBe(0)
    })
  })

  describe('Clear', () => {
    it('Removes all the elements from a queue', () => {
      queue.clear()
      expect(queue.size()).toBe(0)
      expect(queue.isEmpty()).toBe(true)
    })
  })

  describe('ToString', () => {
    it('Returns a string representation of the queue', () => {
      expect(queue.toString()).toBe('One,Two,Three')
    })
  })
})