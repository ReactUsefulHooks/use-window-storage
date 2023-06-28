const path = require('path');

/**
 * @type [src to copy or delete, destination][]
 */
const PATHS = [
	// readme
	[
		`${path.resolve(__dirname, '../', 'README.md')}`,
		`${path.resolve(__dirname, '../packages/use-window-storage', 'README.md')}`,
	],
	// static
	[
		`${path.resolve(__dirname, '../', 'static')}`,
		`${path.resolve(__dirname, '../packages/use-window-storage', 'static')}`,
	],
];
module.exports = PATHS;
