/**
 * Imports
 */

import flob from 'flob'
import toMiddleware from '@f/to-middleware'

/**
 * flom
 */

function flom (...fns) {
  return flob(...fns.map(toMiddleware))
}

/**
 * Exports
 */

export default flom
