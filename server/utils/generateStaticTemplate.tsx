import React                                  from 'react';
import { ServerStyleSheet }                   from 'styled-components/macro';
import { Helmet }                             from 'react-helmet';
import { renderToString }                     from 'react-dom/server';

import { StaticTemplate, OptionsForGenerate } from '@server/types/template';

export function generateStaticTemplate({
    Component,
    store,
    extractor,
    props
}: OptionsForGenerate): StaticTemplate {
    const sheet = new ServerStyleSheet();

    const { title, meta } = Helmet.renderStatic();

    return {
        html               : renderToString(sheet.collectStyles(<Component />)),
        scriptTags         : extractor.getScriptTags(),
        styleChunksTags    : extractor.getStyleTags(), // loadable components extract styles in chunk files
        styleComponentsTags: sheet.getStyleTags(), // styled components generate style tag
        storage            : `window.__PRELOADED_STATE__ = ${ JSON.stringify(store.getState()).replace(/</g, '\\u003c') }`,
        initialProps       : `window.__INITIAL_PROPS__ = ${ JSON.stringify(props) }`,
        title,
        meta
    };
}
