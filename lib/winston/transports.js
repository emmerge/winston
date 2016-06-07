/*
 * transports.js: Set of all transports Winston knows about
 *
 * (C) 2010 Charlie Robbins
 * MIT LICENCE
 *
 */

// var path = require('path');

/**
 * Meteor 1.3.1 doesn't appear to like the dynamic require here
 * Emmerge uses console and file transports, so requiring them manually
 */

exports.Console = require('./transports/console').Console;
exports.File = require('./transports/file').File;

//
// Setup all transports as lazy-loaded getters.
//
// Object.defineProperties(
//   exports,
//   ['Console', 'File', 'Http', 'Memory']
//     .reduce(function (acc, name) {
//       acc[name] = {
//         configurable: true,
//         enumerable: true,
//         get: function () {
//           var fullpath = path.join(__dirname, 'transports', name.toLowerCase());
//           return require(fullpath)[name];
//         }
//       };

//       return acc;
//     }, {})
// );
