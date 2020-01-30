//-----------------------------------------------------------------------------
// src/datastructures/hashes/dictionary.test.js
//-----------------------------------------------------------------------------
import Dictionary   from './dictionary'

describe('Dictionary', () => {
  let dictionary = null
  beforeEach( () => {
    dictionary = new Dictionary()
    dictionary.set(1, 'One')
    dictionary.set(2, 'Two')
    dictionary.set(3, 'Three')
    dictionary.set(4, 'Four')
  })

  describe('set', () => {
    it('Adds a key/value pair to the dictionary', () => {
      expect(dictionary.table['1'].key).toBe(1)
      expect(dictionary.table['1'].value).toBe('One')

      expect(dictionary.table['2'].key).toBe(2)
      expect(dictionary.table['2'].value).toBe('Two')
    })

    it('Overwrites an existing value for a duplicate key', () => {
      dictionary.set(2, 'Lorem ipsum')
      expect(dictionary.table['2'].key).toBe(2)
      expect(dictionary.table['2'].value).toBe('Lorem ipsum')
    })
  })

  describe('remove', () => {
    it('Removes a [key,value] pair from the dictionary', () => {
      expect(dictionary.remove(2)).toBe(true)
      expect(dictionary.table.hasOwnProperty('2')).toBe(false)
    })

    it('Returns false if the [key,value] pair is not in the dictionary', () => {
      expect(dictionary.remove(11)).toBe(false)
    })
  })

  describe('hasKey', () => {
    it('Returns true if the dictionary has the key', () => {
      expect(dictionary.hasKey(1)).toBe(true)
      expect(dictionary.hasKey(4)).toBe(true)
    })

    it('Returns false if the dictionary does not have the key', () => {
      expect(dictionary.hasKey(10)).toBe(false)
      expect(dictionary.hasKey('Four')).toBe(false)
    })
  })

  describe('get', () => {
    it('Returns the value for a key', () => {
      expect(dictionary.get(2)).toBe('Two')
      expect(dictionary.get(4)).toBe('Four')
    })

    it('Returns null if the key is not in the dictionary', () => {
      expect(dictionary.get('Bad')).toBe(null)
    })
  })

  describe('size', () => {
    it('Returns the number of values in the dictionary', () => {
      expect(dictionary.size()).toBe(4)
    })

    it('Returns zero for an empty dictionary', () => {
      let emptyDictionary = new Dictionary()
      expect(emptyDictionary.size()).toBe(0)
    })
  })

  describe('isEmpty', () => {
    it('Returns false for dictionary w/ value', () => {
      expect(dictionary.isEmpty()).toBe(false)
    })

    it('Returns true for an empty dictionary', () => {
      let emptyDictionary = new Dictionary()
      expect(emptyDictionary.isEmpty()).toBe(true)
    })
  })

  describe('clear', () => {
    it('Removes all the values from the dictionary', () => {
      dictionary.clear()
      expect(dictionary.isEmpty()).toBe(true)
    })
  })

  describe('keys', () => {
    it('Returns an array of all the dictionary keys', () => {
      expect(dictionary.keys()).toEqual([1,2,3,4])
    })

    it('Returns an empty array if there are zero values in the dictionary', () => {
      let emptyDictionary = new Dictionary()
      expect(emptyDictionary.keys()).toEqual([])
    })
  })

  describe('values', () => {
    it('Returns an array of all the dictionary values', () => {
      expect(dictionary.values()).toEqual(['One','Two','Three','Four'])
    })

    it('Returns an empty array if there are zero values in the dictionary', () => {
      let emptyDictionary = new Dictionary()
      expect(emptyDictionary.values()).toEqual([])
    })
  })

  describe('keyValues', () => {
    it('Returns an array of [key, value] pairs', () => {
      expect(dictionary.keyValues()).toEqual(
        [ 
          {key: 1, value: 'One'}, 
          {key: 2, value: 'Two'}, 
          {key: 3, value: 'Three'}, 
          {key: 4, value: 'Four'}
        ]
      )
    })

    it('Returns an empty array if there are zero values in the dictionary', () => {
      let emptyDictionary = new Dictionary()
      expect(emptyDictionary.keyValues()).toEqual([])
    })
  })

  describe('toString', () => {
    it('Returns string representation of dictionary', () => {
      let expectedResult = '[1: One],[2: Two],[3: Three],[4: Four]'
      expect(dictionary.toString()).toBe(expectedResult)
    })
  })
})
