import { ServerStyleSheet }                                   from 'styled-components';
import { Helmet }                                             from 'react-helmet';
import { renderToString }                                     from 'react-dom/server';
import SuperJSON                                              from 'superjson';

import { getStyles }                                          from '@server/lib/css';

import type { StaticTemplate, OptionsForGenerate as Options } from './types';

async function generateStaticTemplate(options: Options): Promise<StaticTemplate> {
	const {
		Component,
		store,
		extractor,
		props,
		mode
	} = options;

	const sheet = new ServerStyleSheet();

	const { title, meta } = Helmet.renderStatic();
	const html            = renderToString(sheet.collectStyles(<Component />));

	const { criticalCss, cssChunks } = await getStyles(html);

	return {
		html,
		scriptTags         : extractor.getScriptTags(),
		styleChunksTags    : cssChunks, // loadable components extract styles in chunk files
		styleComponentsTags: sheet.getStyleTags(), // styled components generate style tag
		storage            : `window.__PRELOADED_STATE__ = ${ SuperJSON.stringify(store.getState()).replaceAll(
			'<',
			'\\u003c'
		) }`,
		initialProps: `window.__INITIAL_PROPS__ = ${ SuperJSON.stringify(props) }`,
		criticalCss,
		mode,
		title,
		meta
	};
}

export { generateStaticTemplate };
