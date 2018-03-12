/*
  This file configures the wallaby.js interactive test runner - https://wallabyjs.com/
  Docs: https://wallabyjs.com/docs/config/overview.html
*/

module.exports = function (w) {
  return {
    files: [
      'controllers/**/*.js',
      'services/**/*.js',
      'lib/**/*.js'
    ],
    tests: [
      'spec/**/*.spec.js'
    ],
    env: {
      type: 'node',
      kind: 'chrome'
    },
    testFramework: 'jasmine',
    workers: {recycle: true, initial: 1, regular: 1}
  }
}
