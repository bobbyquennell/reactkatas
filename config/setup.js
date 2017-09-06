
// below is from enzyme: using enzyme with jsdom :
// http://airbnb.io/enzyme/docs/guides/jsdom.html#using-enzyme-with-jsdom
//although jsdom is an dependence of enzyme, we need to install jsdom locally to fix an issue: JSDOM
// is not a constructor:
// https://github.com/airbnb/enzyme/issues/942
/* setup.js */
const { JSDOM } = require('jsdom');

const jsdom = new JSDOM('<!doctype html><html><body></body></html>');
const { window } = jsdom;

function copyProps(src, target) {
  const props = Object.getOwnPropertyNames(src)
    .filter(prop => typeof target[prop] === 'undefined')
    .map(prop => Object.getOwnPropertyDescriptor(src, prop));
  Object.defineProperties(target, props);
}

global.window = window;
global.document = window.document;
global.navigator = {
  userAgent: 'node.js',
};
copyProps(window, global);
/* this setup.js file should be configured in Jest configurations in package.json-->Jest-->setupFiles[array]
see deteails from :https://facebook.github.io/jest/docs/en/configuration.html#setupfiles-array
*/
