/**
 * Imports
 */

import test from 'tape'
import flom from '../src'

/**
 * Tests
 */

test('should create mapping generator', (t) => {

  let wacky = flom(wackify)

  wacky(function * () {
    let wackyHappy = yield 'happy'
    let wackyParallel = yield ['dog', 'cat']
    t.equal(wackyHappy, 'wacky happy')
    t.deepEqual(wackyParallel, ['wacky dog', 'wacky cat'])
    t.end()
  })

  function wackify (str) {
    return 'wacky ' + str
  }

})
