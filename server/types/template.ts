import { HelmetDatum }    from 'react-helmet';
import { Store }          from 'redux';
import { ChunkExtractor } from '@loadable/server';

export type StaticTemplate = {
    [key: string]: string | HelmetDatum;
}

export type OptionsForGenerate = {
    Component: () => JSX.Element;
    store: Store;
    extractor: ChunkExtractor;
}
