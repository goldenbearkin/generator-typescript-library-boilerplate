# Typescript Library Boilerplate Generator 
[![NPM version][npm-image]][npm-url]
[![Build Status][travis-image]][travis-url]
[![Coverage percentage][coveralls-image]][coveralls-url]
> Yeoman generator for a simple tree-shakable typeScript library boilerplate.

Out of the box, you have:
* _Mocha_ - unit test framework.
* _Travis CI_ - continuous integration platform for GitHub projects.
* _Istanbul_ - provide code coverage report.
* _Tslint_ - linter for TypeScript source files.


## Installation

First, install [Yeoman](http://yeoman.io) and generator-typescript-library-boilerplate using [npm](https://www.npmjs.com/) (we assume you have pre-installed [node.js](https://nodejs.org/)).

```bash
npm install -g yo
npm install -g generator-typescript-library-boilerplate
```

Then generate the new project under your desired folder:

```bash
yo typescript-library-boilerplate
```

Go to [https://travis-ci.org](https://travis-ci.org) to activate CI as well as the build badge.

Go to [https://coveralls.io](https://coveralls.io) to activate the coverage badge.

## Scripts

```
yarn test           // run test(mocha) and coverage report(nyc)
yarn test:watch     // run test on watch mode (without coverage report)
yarn build          // build for both esm (ES5 + ES2015 module) and ES5 UMD bundle, at dist folder.
yarn lint           // run lint against lib and test
```

## License

MIT © [goldenbearkin]()


[npm-image]: https://badge.fury.io/gh/goldenbearkin%2Fgenerator-typescript-library-boilerplate.svg
[npm-url]: https://npmjs.org/package/generator-typescript-library-boilerplate
[travis-image]: https://travis-ci.org/goldenbearkin/generator-typescript-library-boilerplate.svg?branch=master
[travis-url]: https://travis-ci.org/goldenbearkin/generator-typescript-library-boilerplate
[coveralls-image]: https://coveralls.io/repos/goldenbearkin/generator-typescript-library-boilerplate/badge.svg
[coveralls-url]: https://coveralls.io/r/goldenbearkin/generator-typescript-library-boilerplate
