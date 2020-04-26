import React                from 'react';
import { ServerStyleSheet } from 'styled-components';
import { Helmet }           from 'react-helmet';
import { renderToString }   from 'react-dom/server';
import { Store }            from 'redux';
import { ChunkExtractor }   from '@loadable/server';
import { StaticTemplate }   from '@server/types/template';

type OptionsForGenerate = {
    Component: () => JSX.Element;
    store: Store;
    extractor: ChunkExtractor;
}

export function generateStaticTemplate({
    Component,
    store,
    extractor
}: OptionsForGenerate): StaticTemplate {
    const sheet = new ServerStyleSheet();

    const html = renderToString(sheet.collectStyles(<Component />));

    const { title, meta } = Helmet.renderStatic();

    return {
        html,
        scriptTags         : extractor.getScriptTags(),
        styleChunksTags    : extractor.getStyleTags(), // loadable components extract styles in chunk files
        styleComponentsTags: sheet.getStyleTags(), // styled components generate style tag
        storage            : `window.__PRELOADED_STATE__ = ${ JSON.stringify(store.getState()).replace(/</g, '\\u003c') }`,
        title,
        meta
    };
}
