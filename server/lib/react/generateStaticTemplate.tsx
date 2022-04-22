import { ServerStyleSheet }                        from 'styled-components/macro';
import { Helmet }                                  from 'react-helmet';
import { renderToString }                          from 'react-dom/server';

import { getStyles }                               from '@server/lib/css';

import type { StaticTemplate, OptionsForGenerate } from './types';

export async function generateStaticTemplate({
	Component,
	store,
	extractor,
	props,
	mode
}: OptionsForGenerate): Promise<StaticTemplate> {
	const sheet = new ServerStyleSheet();

	const { title, meta } = Helmet.renderStatic();
	const html            = renderToString(sheet.collectStyles(<Component />));

	const { criticalCss, cssChunks } = await getStyles(html);

	return {
		html,
		scriptTags         : extractor.getScriptTags(),
		styleChunksTags    : cssChunks, // loadable components extract styles in chunk files
		styleComponentsTags: sheet.getStyleTags(), // styled components generate style tag
		storage            : `window.__PRELOADED_STATE__ = ${ JSON.stringify(store.getState()).replaceAll(
			'<',
			'\\u003c'
		) }`,
		initialProps: `window.__INITIAL_PROPS__ = ${ JSON.stringify(props) }`,
		criticalCss,
		mode,
		title,
		meta
	};
}
