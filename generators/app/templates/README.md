[![Build Status](https://travis-ci.org/<%= username %>/<%= projectname %>.svg?branch=master)](https://travis-ci.org/<%= username %>/<%= projectname %>)
[![Coverage Status](https://coveralls.io/repos/github/<%= username %>/<%= projectname %>/badge.svg?branch=master)](https://coveralls.io/github/<%= username %>/<%= projectname %>?branch=master)

# <%= appname %>

<%= description %>

# Stacks
- **unit test**: mocha, chai
- **code coverage**: nyc, wallabyjs(optional)
- **ci**: travis

# How to use?

# Commands list
````
yarn test           // run test(mocha) and coverage report(nyc)
yarn test:watch     // run test on watch mode (without coverage report)
yarn build          // build for both esm (ES5 + ES2015 module) and ES5 UMD bundle, at dist folder.
yarn lint           // run lint against lib and test
````

# Testing

This boilerplate use Mocha as test framework. Wallaby.js is just supplementary for development.
Delete the wallaby.js if you don't want to use it.

# Reference

# License
MIT
