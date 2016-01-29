/**
 * Imports
 */

import flob from 'flo-bind'
import toMiddleware from '@f/to-middleware'

/**
 * flo-map
 */

function flom (...fns) {
  return flob(...fns.map(toMiddleware))
}

/**
 * Exports
 */

export default flom
