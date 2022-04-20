import type { HelmetDatum }    from 'react-helmet';
import type { Store }          from '@reduxjs/toolkit';
import type { ChunkExtractor } from '@loadable/server';
import type { Theme }          from '@entities/theme';
import type { Context }        from '@shared/types/client-server';

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
