const fs = require('fs');
const PATHS = require('./constants');

const copyFile = (src, dest) => {
	fs.cp(src, dest, { recursive: true }, (err) => {
		if (err) console.log(`Deploy Error: ${err}`);
	});
};

PATHS.forEach(([src, dest]) => {
	copyFile(src, dest);
});

console.log('Success copying file');
