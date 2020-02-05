//-----------------------------------------------------------------------------
// src/datastructures/hashes/hash-table.test.js
//-----------------------------------------------------------------------------
import HashTable  from './hash-table'

describe('HashTable', () => {

  let hash = null
  beforeEach( () => {
    hash = new HashTable()
    hash.put('forward',    'Leo Messi')
    hash.put('midfielder', 'Thiago Alcantara')
    hash.put('defender',   'Virgil Van Dyke')
  })

  describe('hashCode', () => {
    it('Returns a hash code', () => {
      expect(hash.hashCode('forward')).toBe(17)
      expect(hash.hashCode('defense')).toBe(27)
    })
  })

  describe('put', () => {
    it('Adds a key/value to the hash table', () => {
      let key  = hash.hashCode('goalkeeper')
      expect(hash.put('goalkeeper', 'David DeGea')).toBe(true)
      expect(hash.table[key].key).toBe('goalkeeper')
      expect(hash.table[key].value).toBe('David DeGea')
    })

    it('Does not add a null key to the hash', () => {
      expect(hash.put(null, 'Sadio Mane')).toBe(false)
    })

    it('Does not add a null value to the hash', () => {
      expect(hash.put('forward', null)).toBe(false)
    })
  })

  describe('get', () => {
    it('Returns the value for a key', () => {
      expect(hash.get('defender')).toBe('Virgil Van Dyke')
      expect(hash.get('forward')).toBe('Leo Messi')
    })

    it('Returns undefined if key is not in the hashtable', () => {
      expect(hash.get('coach')).toBe(undefined)
    })
  })

  describe('remove', () => {
    it('Removes a value from the hashtable', () => {
      let key       = 'midfielder'
      let hashcode  = hash.hashCode(key)
      expect(hash.remove(key)).toBe(true)
      expect(hash.table.hasOwnProperty(hashcode)).toBe(false)
    })

    it('Returns false if the key is not in the hashtable', () => {
      expect(hash.remove('coach')).toBe(false)
    })
  })
})