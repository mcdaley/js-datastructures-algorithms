//-----------------------------------------------------------------------------
// src/datastructures/queues/queue.test.js
//-----------------------------------------------------------------------------
import Queue from './queue'

describe('Queue', () => {
  let queue = null;
  beforeEach( () => {
    queue = new Queue()
    queue.enqueue('One')
    queue.enqueue('Two')
    queue.enqueue('Three')
  })
  describe('Enqueue', () => {
    it('Adds elements to the queue', () => {
      expect(queue.front).toBe(0)
      expect(queue.count).toBe(3)

      queue.enqueue('Four')
      expect(queue.front).toBe(0)
      expect(queue.count).toBe(4)
      expect(queue.data[queue.front]).toBe('One')
      expect(queue.data[queue.count - 1]).toBe('Four')

      queue.enqueue('Five')
      expect(queue.front).toBe(0)
      expect(queue.count).toBe(5)
      expect(queue.data[queue.front]).toBe('One')
      expect(queue.data[queue.count - 1]).toBe('Five')
    })
  })

  describe('Dequeue', () => {
    it('Returns the first element in the queue', () => {
      expect(queue.dequeue()).toBe('One')
      expect(queue.front).toBe(1)
      expect(queue.count).toBe(2)

      expect(queue.dequeue()).toBe('Two')
      expect(queue.front).toBe(2)
      expect(queue.count).toBe(1)

      expect(queue.dequeue()).toBe('Three')
      expect(queue.front).toBe(3)
      expect(queue.count).toBe(0)

      expect(queue.dequeue()).toBe(undefined)
      expect(queue.front).toBe(3)
      expect(queue.count).toBe(0)
    })

    it('Returns undefined for an empty queue', () => {
      let emptyQueue = new Queue()
      expect(emptyQueue.dequeue()).toBe(undefined)
    })
  })

  describe('Peek', () => {
    it('Returns the first element in the queue w/o removing it', () => {
      expect(queue.peek()).toBe('One')
      expect(queue.front).toBe(0)
      expect(queue.count).toBe(3)
    })

    it('Returns undefined if the queue is empty', () => {
      let emptyQueue = new Queue()
      expect(emptyQueue.peek()).toBe(undefined)
    })
  })

  describe('Clear', () => {
    it('Removes all elements from the queue', () => {
      queue.clear()
      expect(queue.size()).toBe(0)
      expect(queue.data).toEqual({})
    })
  })

  describe('IsEmpty', () => {
    it('Returns false if the queue is not empty', () => {
      expect(queue.isEmpty()).toBe(false)
    })

    it('Returns true if the queue is empty', () => {
      let emptyQueue = new Queue()
      expect(emptyQueue.isEmpty()).toBe(true)
    })
  })

  describe('Size', () => {
    it('Returns the number of elements in the queue', () => {
      expect(queue.size()).toBe(3)

      queue.enqueue('Four')
      queue.enqueue('Five')
      expect(queue.size()).toBe(5)

      queue.dequeue()
      expect(queue.size()).toBe(4)
    })

    it('Returns zero for an empty queue', () => {
      let emptyQueue = new Queue()
      expect(emptyQueue.size()).toBe(0)
    })
  })

  describe('ToString', () => {
    it('Returns a string representation of the queue', () => {
      expect(queue.toString()).toBe('[One,Two,Three]')
    })
  })
})