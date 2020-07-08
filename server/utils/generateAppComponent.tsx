import React                     from 'react';
import { Provider }              from 'react-redux';
import { renderRoutes }          from 'react-router-config';
import { StaticRouter }          from 'react-router';
import { ChunkExtractorManager } from '@loadable/server';

import routes                    from '@core/components/Router/routes';
import { GenerateAppOptions }    from '@server/types/appComponent';

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
                    { renderRoutes(routes) }
                </ChunkExtractorManager>
            </StaticRouter>
        </Provider>
    );
}
