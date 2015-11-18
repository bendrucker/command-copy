'use strict'

var test = require('tape')
var proxyquire = require('proxyquire')

test('availabe', function (t) {
  t.plan(2)

  var copy = proxyquire('./', {
    'global/document': {
      execCommand: function () {
        t.pass('called')
      }
    }
  })

  t.doesNotThrow(copy)
})

test('unavailabe', function (t) {
  t.plan(1)

  var copy = proxyquire('./', {
    'global/document': {
      execCommand: function () {
        throw new Error('I am broken')
      }
    }
  })

  t.doesNotThrow(copy)
})
