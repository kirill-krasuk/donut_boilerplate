import { HelmetDatum }    from 'react-helmet';
import { Store }          from '@reduxjs/toolkit';
import { ChunkExtractor } from '@loadable/server';

import { Theme }          from '@entities/theme';
import { Context }        from '@shared/types/client-server';

export type StaticTemplate = Record<string, HelmetDatum | string>

export type GenerateAppOptions = {
    store: Store,
    context: Context,
    location: string,
    extractor: ChunkExtractor
}

export type OptionsForGenerate = {
    Component(): JSX.Element,
    store: Store,
    extractor: ChunkExtractor,
    props: Record<string, any>,
    mode: Theme
}
