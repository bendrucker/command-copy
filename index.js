'use strict'

var document = require('global/document')

module.exports = function copy () {
  try {
    document.execCommand('copy')
  } catch (_) {}
}
