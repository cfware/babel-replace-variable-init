const t = require('libtap');
const {transformSync} = require('@babel/core');

const babelReplaceVariableInit = require(
	process.versions.node.split('.')[0] >= 14 ? 'babel-replace-variable-init' : './index.cjs'
);

t.type(babelReplaceVariableInit, 'function');

const instance = babelReplaceVariableInit({
	var1: ({types: t}) => t.arrayExpression([])
});
t.type(instance, 'function');

const processSource = (source, plugins) => transformSync(source, {
	babelrc: false,
	configFile: false,
	compact: true,
	plugins
}).code;

const source = `
	const var1 = true;
	const var2 = false;
`;
const expected = `
	const var1 = [];
	const var2 = false;
`;
t.same(
	processSource(source, [instance]),
	processSource(expected, [])
);
