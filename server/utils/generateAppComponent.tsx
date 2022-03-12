import { Provider }              from 'react-redux';
import { StaticRouter }          from 'react-router-dom/server';

import Routes                    from '@app/routes';
import { ChunkExtractorManager } from '@loadable/server';
import { RedirectProvider }      from '@app/components';
import { GenerateAppOptions }    from '@server/types/appComponent';
import { RootProviders }         from '@app/providers';

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
                        <RootProviders />

                        <Routes />
                    </ChunkExtractorManager>
                </RedirectProvider>
            </StaticRouter>
        </Provider>
    );
}
