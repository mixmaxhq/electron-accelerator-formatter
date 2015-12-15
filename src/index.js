require('./patchOSPlatform');
var os = require('os');

var IS_MAC = os.platform() === 'darwin';
var CMD_OR_CTRL = IS_MAC ? '\u2318' : '\u2303';

var MODIFIER_MAP = {
  'Command': '\u2318',
  'Cmd': '\u2318',
  'CommandOrControl': CMD_OR_CTRL,
  'CmdOrCtrl': CMD_OR_CTRL,
  'Super': '\u2318',
  'Control': '\u2303',
  'Ctrl': '\u2303',
  'Shift': '\u21e7',
  'Alt': '\u2325',
  'Plus': '='
};

var formatter = function(accelerator) {
  if (!accelerator) return '';

  return accelerator
    .split('+')
    .map(function(modifierOrKeyCode) {
      return MODIFIER_MAP[modifierOrKeyCode] || modifierOrKeyCode;
    })
    .join('');
};

module.exports = formatter;