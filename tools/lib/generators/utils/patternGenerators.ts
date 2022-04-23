/**
 * end of object
 *
 * (<content>)? - not required pattern
 *
 * _________
 *
 *     }(,)?
 * }( as const)?(;)?
 *
 */
function generateEndOfObjectPattern() {
	return /^\n\s{2,4}},?\n};?(\sas\sconst;)?\n$/;
}

/**
 * end of template object
 *
 * (<content>)? - not required pattern
 *
 * _________
 *
 *
 * 1.  },
 * 2.  key: {
 * 3.     subKey: value(,)?
 * 4.  }(,)?
 * 5.}( as const)?(;)?
 *
 */
function generateObjectReplacePattern(key: string, subKey: string, value: string) {
	return new RegExp(
		[
			String.raw`^\n\s{2,4}},\n`, // (1),
			String.raw`\s{2,4}(?:"{\$${ key }}"|{\$${ key }}):\s{\n`, // (2)
			String.raw`\s{4,8}${ subKey }:\s(?:${ value }|(["'])\/{\$${ value }}\1),?\n`, // (3)
			String.raw`\s{2,4}},?\n`, // (4)
			String.raw`};?(\sas\sconst;)?\n$` // (5)
		].join('')
	);
}

export { generateEndOfObjectPattern, generateObjectReplacePattern };
