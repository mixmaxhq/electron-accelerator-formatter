# electron-accelerator-formatter

Formats an [accelerator](https://github.com/atom/electron/blob/master/docs/api/accelerator.md)
as a string of Unicode characters.

## Installation

```js
npm install electron-accelerator-formatter --save
```

## Usage

```js
var acceleratorFormatter = require('electron-accelerator-formatter');

var accelerator = 'Command+Shift+M';

// Prints '⌘⇧M'
console.log(acceleratorFormatter(accelerator));
```

## Contributing

We welcome pull requests! Please lint your code.

## Release History

* 1.0.0 Initial release.