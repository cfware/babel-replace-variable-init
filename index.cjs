'use strict';

module.exports = replacements => {
	return babel => ({
		visitor: {
			VariableDeclarator(path) {
				const {name} = path.node.id;
				if (name in replacements) {
					path.get('init').replaceWith(replacements[name](babel));
				}
			}
		}
	});
};
