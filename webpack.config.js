const devModule = require('./webpack-config/dev');
const buildModule = require('./webpack-config/build');

let comboModule = {};

let ENV = process.env.NODE_ENV;

console.log('~current node environment is ' + ENV);

if ( ENV === 'dev') {
  comboModule = devModule;
  console.log(comboModule);
} else if ( ENV === 'production') {
  comboModule = buildModule
}

module.exports = comboModule;