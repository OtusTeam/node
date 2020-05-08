const promisify = require('./promisify')
const assert = require('assert')

describe('promisify()', () => {
  
  const assertFn = (fn) => assert.equal(typeof fn, 'function')
  
  test('function should exist', () => {
    // arrange
    // act
    // assert
    assertFn(promisify)
  })
  
  describe('should return function', () => {
    let givenFn
    let returnValue
    
    beforeEach(() => {
      givenFn = function() {}
      returnValue = promisify(givenFn)
    })
    
    test('which returns Promise', () => {
      const actual = returnValue()
      assert(actual instanceof Promise)
    })
  })

})