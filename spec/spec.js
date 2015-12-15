/* jshint jasmine:true */
var formatter;

// Reloading is used to test platform independence.
function reloadFormatter() {
  delete require.cache[require.resolve('../src')];
  formatter = require('../src');
}
reloadFormatter();

var os = require('os');

describe('formatter', function() {
  it('should work', function() {
    expect(formatter('Shift+M')).toBe('\u21e7M');
  });

  it('should return the empty string given invalid input', function() {
    expect(formatter('')).toBe('');
    expect(formatter()).toBe('');
  });

  describe('platform independence', function() {
    describe('Windows', function() {
      beforeEach(function() {
        spyOn(os, 'platform').and.returnValue('win32');
        reloadFormatter();
      });

      it('should return the appropriate value for CmdOrCtrl', function() {
        expect(formatter('CmdOrCtrl+Shift+M')).toBe('\u2303\u21e7M');
      });
    });

    describe('Mac', function() {
      beforeEach(function() {
        spyOn(os, 'platform').and.returnValue('darwin');
        reloadFormatter();
      });

      it('should return the appropriate value for CmdOrCtrl', function() {
        expect(formatter('CmdOrCtrl+Shift+M')).toBe('\u2318\u21e7M');
      });
    });
  });
});
