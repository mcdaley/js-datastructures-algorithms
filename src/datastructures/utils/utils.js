//-----------------------------------------------------------------------------
// src/utils/utils.js
//-----------------------------------------------------------------------------

export const Compare = {
  LESS_THAN:   -1,
  BIGGER_THAN:  1,
  EQUALS:       0
};

export const DOES_NOT_EXIST = -1;

/**
 * Uses JavaScript's default equals to compare to objects. Returns true if 
 * the objects are equals, otherwise returns false
 * @param   {Object}  a 
 * @param   {Object}  b
 * @returns {Boolean} 
 */
export function defaultEquals(a, b) {
  return a === b
}

/**
 * Returns the default string representation for an Object. The method is 
 * a simple implementation of toString() that should be overridden for
 * complex objects.
 * @param  {Object} item
 * @return {String} String representation of the item object.
 */
export function defaultToString(item) {
  if (item === null) {
    return 'NULL';
  } if (item === undefined) {
    return 'UNDEFINED';
  } if (typeof item === 'string' || item instanceof String) {
    return `${item}`;
  }
  return item.toString();
}