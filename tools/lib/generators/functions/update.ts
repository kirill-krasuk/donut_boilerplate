import chalk                                       from 'chalk';
import fs                                          from 'node:fs';

import { patterns }                                from '../constants/patterns';
import { ROOT_PATH }                               from '../constants/rootPath';

import type { PatternsKey }                        from '../constants/patterns';
import type { PatternsObject, PatternsWithArrays } from '../types/patterns';

// TODO: refactoring to regexp logic
const replacePatternByInterpolateData = (
	data: Readonly<Record<string, any>>,
	initialValue: string
) =>
	Object.entries(data).reduce(
		(acc, [ key, value ]) => acc.replaceAll(`{$${ key }}`, value),
		initialValue
	);

const patternIsArray = (patternsByType: any): patternsByType is PatternsWithArrays =>
	Array.isArray(patternsByType.pattern);

function detectPattern(patternsByType: PatternsObject, file: string) {
	if (patternIsArray(patternsByType)) {
		const patternIndex = patternsByType.pattern.findIndex(pattern =>
			file.includes(pattern)
		);

		return {
			pattern: patternsByType.pattern[patternIndex],
			replace: patternsByType.replace[patternIndex]
		};
	}

	return patternsByType;
}

function update(source: string, type: PatternsKey, data: Readonly<Record<string, any>>) {
	const sourcePath = ROOT_PATH + source;
	const file       = fs.readFileSync(sourcePath, 'utf8');

	const replacePattern = detectPattern(patterns[type], file);
	const replaceValue   = replacePatternByInterpolateData(data, replacePattern.replace);

	if (file.includes(replaceValue)) {
		console.info(chalk`[{blue.bold EXISTS}] changes already exists in ${ source }`);
		return;
	}

	if (!file.includes(replacePattern.pattern)) {
		console.error(chalk`[{red.bold ERROR}] Something wrong with ${ source }`);
		return;
	}

	const res = file.replace(replacePattern.pattern, replaceValue);

	try {
		fs.writeFileSync(sourcePath, res, 'utf8');
		console.info(chalk`[{yellow.bold UPDATE}] ${ source }`);
	} catch {
		throw new Error(`File update error ${ source }`);
	}
}

export { update };
