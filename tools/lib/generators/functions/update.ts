import fs                                          from 'node:fs';
import chalk                                       from 'chalk';

import { ROOT_PATH }                               from '../constants/rootPath';
import { PatternsKey, patterns }                   from '../constants/patterns';

import type { PatternsObject, PatternsWithArrays } from '../types/patterns';

// TODO: refactoring to regexp logic
function replacePatternByInterpolateData(data: Record<string, any>, initialValue: string) {
	return Object.entries(data).reduce(
		(acc, [ key, value ]) => acc.replaceAll(`{$${ key }}`, value),
		initialValue
	);
}

function patternIsArray(patternsByType: any): patternsByType is PatternsWithArrays {
	return Array.isArray(patternsByType.pattern);
}

function detectPattern(patternsByType: PatternsObject, file: string) {
	if (patternIsArray(patternsByType)) {
		const patternIndex = patternsByType.pattern.findIndex(pattern => file.includes(pattern));

		return {
			pattern: patternsByType.pattern[patternIndex],
			replace: patternsByType.replace[patternIndex],
		};
	}

	return patternsByType;
}

export function update(source: string, type: PatternsKey, data: Record<string, any>) {
	const sourcePath = ROOT_PATH + source;
	const file       = fs.readFileSync(sourcePath, 'utf8');

	const replacePattern = detectPattern(patterns[type], file);
	const replaceValue   = replacePatternByInterpolateData(data, replacePattern.replace);

	if (file.includes(replaceValue)) {
		return console.info(chalk`[{blue.bold EXISTS}] changes already exists in ${ source }`);
	}

	if (!file.includes(replacePattern.pattern)) {
		return console.error(chalk`[{red.bold ERROR}] Something wrong with ${ source }`);
	}

	const res = file.replace(replacePattern.pattern, replaceValue);

	try {
		fs.writeFileSync(sourcePath, res, 'utf8');
		console.info(chalk`[{yellow.bold UPDATE}] ${ source }`);
	} catch {
		throw new Error(`File update error ${ source }`);
	}
}
