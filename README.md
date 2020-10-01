# babel-replace-variable-init [![NPM Version][npm-image]][npm-url]

Generate a babel plugin which replaces variable initializations

## Usage

```js
import babelReplaceVariableInit from 'babel-replace-variable-init';

export default babelReplaceVariable({
	variableName: ({types: t}) => t.stringLiteral('')
});
```

This will create a babel plugin which will replace the initialization of any
`variableName` variable with an empty string.

[npm-image]: https://img.shields.io/npm/v/babel-replace-variable-init.svg
[npm-url]: https://npmjs.org/package/babel-replace-variable-init
