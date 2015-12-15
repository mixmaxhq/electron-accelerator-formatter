/* jshint browser: true */
(function() {
  var previousFormatter = window.electronAcceleratorFormatter;

  var formatter = require('./src');
  window.electronAcceleratorFormatter = formatter;
  window.electronAcceleratorFormatter.noConflict = function() {
    window.electronAcceleratorFormatter = previousFormatter;
    return formatter;
  };
})();
