/* jshint jasmine:true */
var formatter;

// Reloading is used to test platform independence.
function reloadFormatter() {
  var FORMATTER_PATH = '../src';
  delete require.cache[require.resolve(FORMATTER_PATH)];
  formatter = require(FORMATTER_PATH);
}
reloadFormatter();

var os = require('os');

describe('formatter', function() {
  it('should work', function() {
    expect(formatter('Shift+M')).toBe('⇧M');
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
        expect(formatter('CmdOrCtrl+Shift+M')).toBe('⌃⇧M');
      });
    });

    describe('Mac', function() {
      beforeEach(function() {
        spyOn(os, 'platform').and.returnValue('darwin');
        reloadFormatter();
      });

      it('should return the appropriate value for CmdOrCtrl', function() {
        expect(formatter('CmdOrCtrl+Shift+M')).toBe('⌘⇧M');
      });
    });
  });
});