// Webpack's `os` shim always returns "browser" from `platform`. This is dumb.
var os = require('os');

if (os.platform() === 'browser') {
  /* jshint browser: true */
  os.platform = function() {
    return /OS X/.test(window.navigator.userAgent) ? 'darwin' : 'win32';
  };
}
