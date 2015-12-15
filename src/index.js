var os = require('os');

var IS_MAC = os.platform() === 'darwin';
var CMD_OR_CTRL = IS_MAC ? '⌘' : '⌃';

var MODIFIER_MAP = {
  'Command': '⌘',
  'Cmd': '⌘',
  'CommandOrControl': CMD_OR_CTRL,
  'CmdOrCtrl': CMD_OR_CTRL,
  'Super': '⌘',
  'Control': '⌃',
  'Ctrl': '⌃',
  'Shift': '⇧',
  'Alt': '⌥',
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