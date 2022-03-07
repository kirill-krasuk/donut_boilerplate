import { HelmetDatum }    from 'react-helmet';
import { Store }          from '@reduxjs/toolkit';
import { ChunkExtractor } from '@loadable/server';

import { Theme }          from '@entities/theme';

export type StaticTemplate = {
    [key: string]: string | HelmetDatum;
}

export type OptionsForGenerate = {
    Component: () => JSX.Element;
    store: Store;
    extractor: ChunkExtractor;
    props: { [key: string]: any } | {};
    mode: Theme;
}
