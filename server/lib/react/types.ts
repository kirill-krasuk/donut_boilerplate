import { HelmetDatum }    from 'react-helmet';
import { Store }          from '@reduxjs/toolkit';
import { ChunkExtractor } from '@loadable/server';

import { Theme }          from '@entities/theme';
import { Context }        from '@shared/types/client-server';

type StaticTemplate = Record<string, HelmetDatum | string>

type GenerateAppOptions = {
    store: Store,
    context: Context,
    location: string,
    extractor: ChunkExtractor
}

type OptionsForGenerate = {
    Component(): JSX.Element,
    store: Store,
    extractor: ChunkExtractor,
    props: Record<string, any>,
    mode: Theme
}

export type {
    StaticTemplate,
    GenerateAppOptions,
    OptionsForGenerate
};
