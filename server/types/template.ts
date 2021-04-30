import { HelmetDatum }    from 'react-helmet';
import { Store }          from 'redux';
import { ChunkExtractor } from '@loadable/server';
import { Option }         from 'fp-ts/lib/Option';
import { Theme }          from '@core/enums/theme';

export type StaticTemplate = {
    [key: string]: string | HelmetDatum;
}

export type OptionsForGenerate = {
    Component: () => JSX.Element;
    store: Store;
    extractor: ChunkExtractor;
    props: Option<{ [key: string]: any }>;
    mode: Theme;
}
