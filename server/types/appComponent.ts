import { Store }          from '@reduxjs/toolkit';
import { ChunkExtractor } from '@loadable/server';

import { Context }        from '@shared/types/client-server';

export type GenerateAppOptions = {
    store: Store,
    context: Context,
    location: string,
    extractor: ChunkExtractor
}
