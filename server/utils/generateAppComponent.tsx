import React                                     from 'react';
import { Store }                                 from 'redux';
import { Provider }                              from 'react-redux';
import { renderRoutes, RouteConfig }             from 'react-router-config';
import { StaticRouter }                          from 'react-router';
import { ChunkExtractorManager, ChunkExtractor } from '@loadable/server';

import routes                                    from '@core/components/Router/routes';
import { Context }                               from '@server/types/context';

type GenerateAppOptions = {
    store: Store;
    context: Context;
    location: string;
    extractor: ChunkExtractor;
}

export function generateAppComponent({
    store,
    context,
    location,
    extractor
}: GenerateAppOptions) {
    return (): JSX.Element => (
        <Provider store={ store }>
            <StaticRouter context={ context } location={ location }>
                <ChunkExtractorManager extractor={ extractor }>
                    { renderRoutes(routes as RouteConfig[]) }
                </ChunkExtractorManager>
            </StaticRouter>
        </Provider>
    );
}
