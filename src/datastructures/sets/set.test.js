//-----------------------------------------------------------------------------
// src.datastructures/sets/set.test.js
//-----------------------------------------------------------------------------
import Set  from './set'

describe('Set', () => {
  let set = null
  beforeEach( () => {
    set = new Set()
    set.add('One')
    set.add(1)
    set.add('Two')
    set.add(2)
  })

  describe('add', () => {
    it('Adds an element to the set', () => {
      expect(set.add('Three')).toBe(true)
      expect(set.items.hasOwnProperty('Three')).toBe(true)

      expect(set.add(3)).toBe(true)
      expect(set.items.hasOwnProperty(3)).toBe(true)
    })

    it('Does not add element if it is already in the set', () => {
      expect(set.add('One')).toBe(false)
      expect(set.add(1)).toBe(false)
    })
  })

  describe('delete', () => {
    it('Deletes an element from the set', () => {
      expect(set.delete('Two')).toBe(true)
      expect(set.items.hasOwnProperty('Two')).toBe(false)

      expect(set.delete(2)).toBe(true)
      expect(set.items.hasOwnProperty(2)).toBe(false)
    })

    it('Does not delete element that is not in the set', () => {
      expect(set.delete('Ten')).toBe(false)
      expect(set.delete(10)).toBe(false)
    })
  })

  describe('has', () => {
    it('Returns true if the element is in the set', () => {
      expect(set.has('One')).toBe(true)
      expect(set.has(2)).toBe(true)
    })

    it('Returns false if the element is not in the set', () => {
      expect(set.has('Ten')).toBe(false)
      expect(set.has(10)).toBe(false)
    })
  })

  describe('clear', () => {
    it('Removes all the items from the set', () => {
      set.clear()
      expect(set.items).toEqual({})
    })
  })

  describe('size', () => {
    it('Returns the number of elements in the set', () => {
      expect(set.size()).toBe(4)
    })

    it('Returns zero for an empty set', () => {
      let emptySet = new Set()
      expect(emptySet.size()).toBe(0)
    })
  })

  describe('values', () => {
    it('Returns the elements in the set', () => {
      let values = set.values()
      
      expect(values.length).toBe(4)
      expect(values.includes('One')).toBe(true)
      expect(values.includes(1)).toBe(true)
      expect(values.includes('Two')).toBe(true)
      expect(values.includes(2)).toBe(true)
    })
  })

  it('Returns [] for an empty set', () => {
    let emptySet = new Set()
    expect(emptySet.values()).toEqual([])
  })
})

