import { HelmetDatum }    from 'react-helmet';
import { Store }          from '@reduxjs/toolkit';
import { ChunkExtractor } from '@loadable/server';

import { Theme }          from '@entities/theme';

export type StaticTemplate = Record<string, HelmetDatum | string>

export type OptionsForGenerate = {
    Component(): JSX.Element,
    store: Store,
    extractor: ChunkExtractor,
    props: Record<string, any>,
    mode: Theme
}
