'use strict';
var path = require('path');
var assert = require('yeoman-assert');
var helpers = require('yeoman-test');

describe('generator-typescript-library-boilerplate:app', function () {
  before(function () {
    return helpers.run(path.join(__dirname, '../generators/app'))
      .withPrompts({someAnswer: true})
      .toPromise();
  });

  it('creates files', function () {
    assert.file([
      'lib/add.ts',
      'lib/divide.ts',
      'lib/index.ts',
      'lib/minus.ts',
      'lib/multiply.ts',
      'test/add.spec.ts',
      'test/divide.spec.ts',
      'test/minus.spec.ts',
      'test/multiply.spec.ts',
      'tools/cleanup.ts',
      '.gitignore',
      '.travis.yml',
      'LICENSE',
      'package.json',
      'README.md',
      'rollup.config.js',
      'tsconfig-esm.json',
      'tsconfig.json',
      'tslint.json',
      'wallaby.js'
    ]);
  });
});
