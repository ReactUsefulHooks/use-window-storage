const fs = require('fs');
const PATHS = require('./constants');

const removeFile = (dest) => {
	fs.rm(dest, { recursive: true }, (err) => {
		if (err) console.log(`Deploy error: ${err}`);
	});
};

PATHS.forEach(([_, dest]) => {
	removeFile(dest);
});

console.log('Success deleting file');
