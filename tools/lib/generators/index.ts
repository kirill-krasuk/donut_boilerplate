import prompts            from 'prompts';
import yargs              from 'yargs';

import { camelToKebab }   from '../../../src/shared/lib/string';
import { generateSchema } from './config/schema';
import {
	componentQuestion,
	generateOptionsQuestion,
	layerQuestion,
	stylesQuestion
} from './constants/questions';
import { generate }               from './functions/generate';

import type { Layer, StylesType } from './types/common';

(prompts as any).override(yargs.argv);

type Answers = {
	layer: Layer,
	name: string,
	generateOptions: string[]
};

async function main() {
	const { layer, name, generateOptions }: Answers = await prompts([
		layerQuestion,
		componentQuestion,
		generateOptionsQuestion
	]);

	let styles: StylesType | null = null;

	if (generateOptions.includes('styles')) {
		({ styles } = await prompts(stylesQuestion));
	}

	const isNeedLocales = generateOptions.includes('locales');
	const isNeedLazy    = generateOptions.includes('lazy');
	// eslint-disable-next-line @typescript-eslint/no-unnecessary-condition
	const isPage = layer === 'pages';

	const schema = generateSchema({
		layer,
		name,
		isNeedLocales,
		isNeedLazy,
		styleType: styles
	});

	generate(schema, {
		name,
		isPage,
		styles,
		isNeedLocales,
		kebabName: camelToKebab(name),
		camelName: name.replace(/^(.)/, (_match, $1) => $1.toLowerCase())
	});
}

main().catch(console.error);
