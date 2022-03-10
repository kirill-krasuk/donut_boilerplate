import { Provider }              from 'react-redux';
import { StaticRouter }          from 'react-router-dom/server';
import Routes                    from '@client/components/Router/RootRoute';
import { ChunkExtractorManager } from '@loadable/server';
import { RedirectProvider }      from '@client/components';

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
                <RedirectProvider context={ context }>
                    <ChunkExtractorManager extractor={ extractor }>
                        <Routes />
                    </ChunkExtractorManager>
                </RedirectProvider>
            </StaticRouter>
        </Provider>
    );
}
