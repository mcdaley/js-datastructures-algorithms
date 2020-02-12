//-----------------------------------------------------------------------------
// src/datastructures/hashes/separate-chaining-hash-table.test.js
//-----------------------------------------------------------------------------
import HashTableSeparateChaining  from './separate-chaining-hash-table'

describe('Hash Table', () => {
  let hashtable;

  beforeEach(() => {
    hashtable = new HashTableSeparateChaining()
    hashtable.put('Jonathan',   'jonathan@email.com')
    hashtable.put('Jamie',      'jamie@email.com')
    hashtable.put('Jack',       'jack@email.com')
    hashtable.put('Nathan',     'nathan@email.com')
    hashtable.put('Athelstan',  'athelstan@email.com')
  })

  describe('hashCode', () => {
    it('Generates a collision hashcode', () => {
      expect(hashtable.hashCode('Jonathan')).toBe(5)
      expect(hashtable.hashCode('Jamie')).toBe(5)
      expect(hashtable.hashCode('Jack')).toBe(7)
      expect(hashtable.hashCode('Nathan')).toBe(10)
      expect(hashtable.hashCode('Athelstan')).toBe(7)
    })
  })
  
  describe('put', () => {
    it('Adds a new [key,value] pair to the hash', () => {
      let position = hashtable.hashCode('Jonathan')
      expect(hashtable.table[position].size()).toBe(2)

      position = hashtable.hashCode('Nathan')
      expect(hashtable.table[position].size()).toBe(1)
    })
  })

  describe('get', () => {
    it('Returns the value for a key in the hash', () => {
      expect(hashtable.get('Athelstan')).toBe('athelstan@email.com')
      expect(hashtable.get('Jack')).toBe('jack@email.com')
    })

    it('Returns undefined if the key is not in the hash', () => {
      expect(hashtable.get('Mike')).toBe(undefined)
    })
  })

  describe('remove', () => {
    it('Removes a [key,value] pair from the hashtable', () => {
      expect(hashtable.remove('Jonathan')).toBe(true)
      expect(hashtable.remove('Jamie')).toBe(true)
      expect(hashtable.remove('Jamie')).toBe(false)
    })

    it('Returns false if the [key,value] pair is not in the hashtable', () => {
      expect(hashtable.remove('Mike')).toBe(false)
    })
  })
})