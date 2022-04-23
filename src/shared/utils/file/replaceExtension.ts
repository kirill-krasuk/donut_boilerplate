const extensionRegexp = /(\.[^.?]+)(\.[^.?]+)?($|[\w&=?]+)/gi;

/**
 * if second param exists
 * this grants what has content hash
 * and extension on second place
 * not first
 */
const replacer =
	(toExtension: string) => (_match: string, $1: string, $2: string, $3: string) => ($2 ? `${ $1 }.${ toExtension }${ $3 }` : `.${ toExtension }${ $3 }`);

function replaceExtension(filePath: string, toExtension: string) {
	return filePath.replace(extensionRegexp, replacer(toExtension));
}

export { replaceExtension };
