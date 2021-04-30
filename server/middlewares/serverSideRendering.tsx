import { Request, Response }        from 'express';
import { ChunkExtractor }           from '@loadable/server';
import { createMemoryHistory }      from 'history';

import { initState as themeState }  from '@core/store/reducers/theme';
import { initState as localeState } from '@core/store/reducers/locale';
import { configureStore }           from '@utils/store/configureStore';
import { prefetch }                 from '@server/utils/prefetch';
import { Context }                  from '@server/types/context';
import { initializeState }          from '@server/utils/initializeState';
import { generateAppComponent }     from '@server/utils/generateAppComponent';
import { generateStaticTemplate }   from '@server/utils/generateStaticTemplate';
import { renderTemplate }           from '@server/utils/renderTemplate';
import { getLoadableChunksOptions } from '@server/utils/getLoadableChunksOptions';
import { headers }                  from '@server/constants/headers';

export async function serverSideRendering(req: Request, res: Response): Promise<void> {
    res.set(...headers.sw);
    res.set(...headers.isCacheable);

    const { loadableStats, useFileSystem } = getLoadableChunksOptions(res.locals);

    const {
        theme: mode = themeState.mode,
        locale = localeState,
        token
    } = req.cookies;

    const history = createMemoryHistory({
        initialEntries: [ req.url ]
    });

    const { store } = configureStore({}, history);
    const extractor = new ChunkExtractor({
        stats          : loadableStats,
        entrypoints    : [ 'bundle' ],
        inputFileSystem: useFileSystem
    });

    const props = await prefetch(req.url, { token });

    const context: Context = {
        token,
        initialProps: props
    };

    initializeState(store, { mode, locale });

    renderTemplate(res, context, generateStaticTemplate({
        Component: generateAppComponent({
            store,
            context,
            location: req.url,
            extractor,
        }),
        store,
        extractor,
        props,
        mode
    }));
}
