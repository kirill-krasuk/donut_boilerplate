import { ServerStyleSheet }                   from 'styled-components/macro';
import { Helmet }                             from 'react-helmet';
import { renderToString }                     from 'react-dom/server';

import { env }                                from '@env/index';
import { StaticTemplate, OptionsForGenerate } from './types';

export async function generateStaticTemplate({
    Component,
    store,
    extractor,
    props,
    mode
}: OptionsForGenerate): Promise<StaticTemplate> {
    let criticalCss = '';

    const sheet = new ServerStyleSheet();

    const { title, meta } = Helmet.renderStatic();

    if (env.server.useCriticalCSSOptimize) {
        criticalCss = await extractor.getCssString();
    }

    return {
        html               : renderToString(sheet.collectStyles(<Component />)),
        scriptTags         : extractor.getScriptTags(),
        styleChunksTags    : extractor.getStyleTags(), // loadable components extract styles in chunk files
        styleComponentsTags: sheet.getStyleTags(), // styled components generate style tag
        storage            : `window.__PRELOADED_STATE__ = ${ JSON.stringify(store.getState()).replaceAll('<', '\\u003c') }`,
        initialProps       : `window.__INITIAL_PROPS__ = ${ JSON.stringify(props) }`,
        criticalCss,
        mode,
        title,
        meta
    };
}
