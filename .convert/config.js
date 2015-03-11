'use strict';

var path = require('path');

module.exports = {
  orgiRepo: 'components/jquery',
  ref: '1.9.1',
  target: path.resolve(__dirname, '..'),

  name: 'jquery',
  repo: 'ddxq-components/jquery',
  keywords: [
    "jquery",
    "component"
  ],
  description: 'convert from [components/jquery]',
  main: {
    'jquery.js': 'jquery.js'
  }
};