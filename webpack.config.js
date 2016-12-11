const devModule = require('./webpack-config/dev');
const buildModule = require('./webpack-config/build');

let comboModule = {};

let ENV = process.env.NODE_ENV;

if ( ENV === 'dev') {
  comboModule = devModule;
} else if ( ENV === 'production') {
  comboModule = buildModule
}

module.exports = comboModule;