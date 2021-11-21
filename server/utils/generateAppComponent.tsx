import { Provider }              from 'react-redux';
import { StaticRouter }          from 'react-router-dom/server';
import Routes                    from '@core/components/Router/RootRoute';
import { ChunkExtractorManager } from '@loadable/server';
import { HTTPProvider }          from '@core/components';

import { GenerateAppOptions }    from '@server/types/appComponent';

export function generateAppComponent({
    store,
    context,
    location,
    extractor
}: GenerateAppOptions) {
    return (): JSX.Element => (
        <Provider store={ store }>
            <StaticRouter location={ location }>
                <HTTPProvider context={ context }>
                    <ChunkExtractorManager extractor={ extractor }>
                        <Routes />
                    </ChunkExtractorManager>
                </HTTPProvider>
            </StaticRouter>
        </Provider>
    );
}
