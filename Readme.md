
# flo-map

[![Build status][travis-image]][travis-url]
[![Git tag][git-image]][git-url]
[![NPM version][npm-image]][npm-url]
[![Code style][standard-image]][standard-url]

Flo map.

## Installation

    $ npm install flo-map

## Usage

```js
import flo-map from 'flo-map'

let wacky = flo-map(wackify)

wacky(function * () {
  yield 'happy' // => 'wacky happy'
  yield ['dog', 'cat'] // => ['wacky dog', 'wacky cat']
})

function wackify (str) {
  return 'wacky ' + str
}
```

## API

### flo-map(..fns)

- `fns` - functions to perform left to right composition over - composition is past "non-floables"

**Returns:** a unary function that takes an action - action can be "floable" or action to be processed by composition

## License

MIT

[travis-image]: https://img.shields.io/travis/joshrtay/flo-map.svg?style=flat-square
[travis-url]: https://travis-ci.org/joshrtay/flo-map
[git-image]: https://img.shields.io/github/tag/joshrtay/flo-map.svg
[git-url]: https://github.com/joshrtay/flo-map
[standard-image]: https://img.shields.io/badge/code%20style-standard-brightgreen.svg?style=flat
[standard-url]: https://github.com/feross/standard
[npm-image]: https://img.shields.io/npm/v/flo-map.svg?style=flat-square
[npm-url]: https://npmjs.org/package/flo-map
