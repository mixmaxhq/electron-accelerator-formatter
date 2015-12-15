# electron-accelerator-formatter

Formats an [accelerator](https://github.com/atom/electron/blob/master/docs/api/accelerator.md)
as a string of Unicode characters.

Handles Windows and Mac, not yet Linux.

Works in both Electron (i.e. Node) and the browser!

## Installation

For Electron:

```js
npm install electron-accelerator-formatter --save
```

For the browser:

```js
bower install electron-accelerator-formatter --save
```

## Usage

In Electron:

```js
var acceleratorFormatter = require('electron-accelerator-formatter');

var accelerator = 'CmdOrCtrl+Shift+M';

// Prints '⌘⇧M' on Mac, '^⇧M' on Windows
console.log(acceleratorFormatter(accelerator));
```

In the browser:

```html
<!-- Loads `electronAcceleratorFormatter` into `window`. -->
<script src="bower_components/electron-accelerator-formatter/dist/bundle.min.js"></script>

<script type="text/javascript">
  var accelerator = 'CmdOrCtrl+Shift+M';

  // Prints '⌘⇧M' on Mac, '^⇧M' on Windows
  console.log(electronAcceleratorFormatter(accelerator));
</script>
```

## Contributing

We welcome pull requests! Please lint your code.

### Running tests

To run the Node tests: `npm test`.

To run the browser tests: `npm run-script build-test && npm run-script open-test`.

### Building for release

`npm run-script build`

## Release History

* 1.1.0 Works in the browser!
* 1.0.1 Documentation fix
* 1.0.0 Initial release.
