//-----------------------------------------------------------------------------
// src/datastructures/stack/Stack.test.js
//-----------------------------------------------------------------------------
import Stack from './Stack'

describe('Stack', () => {
  let stack = null
  beforeEach( () => {
    stack = new Stack()
    stack.push('One')
    stack.push('Two')
    stack.push('Three')
  })
  
  describe('Push', () => {
    it('Adds elements to the top of the stack', () => {
      expect(stack.size()).toBe(3)
      expect(stack.data[0]).toBe('One')
      expect(stack.data[1]).toBe('Two')
      expect(stack.data[2]).toBe('Three')
    })
  })

  describe('Pop', () => {
    it('Removes elements from the top of the stack', () => {
      expect(stack.pop()).toBe('Three')
      expect(stack.size()).toBe(2)
      expect(stack.pop()).toBe('Two')
      expect(stack.size()).toBe(1)
      expect(stack.pop()).toBe('One')
      expect(stack.size()).toBe(0)
    })

    it('Returns null when the stack is empty', () => {
      let emptyStack = new Stack()
      expect(emptyStack.pop()).toBe(null)
    })
  })

  describe('Peek', () => {
    it('Returns the top element of the stack w/o removing from stack', () => {
      expect(stack.peek()).toBe('Three')
      expect(stack.size()).toBe(3)
    })

    it('Returns null when the stack is empty', () => {
      let emptyStack = new Stack()
      expect(emptyStack.peek()).toBe(null)
    })
  })

  describe('IsEmpty', () => {
    it('Returns false for a stack w/ elements', () => {
      expect(stack.isEmpty()).toBe(false)
    })

    it('Returns true for an empty stack', () => {
      let emptyStack = new Stack()
      expect(emptyStack.isEmpty()).toBe(true)
    })
  })

  describe('Size', () => {
    it('Returns the number of elements in the stack', () =>{
      expect(stack.size()).toBe(3)
      stack.pop()
      expect(stack.size()).toBe(2)
      stack.pop()
      expect(stack.size()).toBe(1)
      stack.pop()
      expect(stack.size()).toBe(0)
    })
  })

  describe('Clear', () => {
    it('Removes all elements from the stack', () => {
      stack.clear()
      expect(stack.size()).toBe(0)
      expect(stack.data).toEqual([])
    })
  })
})
