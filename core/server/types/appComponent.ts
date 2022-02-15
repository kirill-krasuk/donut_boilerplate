import { Store }          from 'redux';
import { ChunkExtractor } from '@loadable/server';

import { Context }        from '@server/types/context';

export type GenerateAppOptions = {
    store: Store;
    context: Context;
    location: string;
    extractor: ChunkExtractor;
}
