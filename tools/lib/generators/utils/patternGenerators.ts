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
 *  },
 *  key: {
 *     subKey: value(,)?
 *  }(,)?
 *}( as const)?(;)?
 *
 */
function generateObjectReplacePattern(key: string, subKey: string, value: string) {
	return new RegExp(
		[
			String.raw`^\n\s{2,4}},\n`, // },
			String.raw`\s{2,4}(?:"{\$${ key }}"|{\$${ key }}):\s{\n`, //    key: {
			String.raw`\s{4,8}${ subKey }:\s(?:${ value }|(["'])\/{\$${ value }}\1),?\n`, //        subKey: value(,)?
			String.raw`\s{2,4}},?\n`, //    }(,)?
			String.raw`};?(\sas\sconst;)?\n$` // }( as const)(;)?
		].join('')
	);
}

export { generateEndOfObjectPattern, generateObjectReplacePattern };
