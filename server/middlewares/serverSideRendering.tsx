import { Request, Response }        from 'express';
import { ChunkExtractor }           from '@loadable/server';

import { initState as themeState }  from '@core/store/reducers/theme';
import { initState as localeState } from '@core/store/reducers/locale';
import { configureStore }           from '@core/utils/store/configureStore';
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

    const location = req.url;

    const {
        theme: mode = themeState.mode,
        locale = localeState,
        token
    } = req.cookies;

    const { store } = configureStore({});
    const extractor = new ChunkExtractor({
        stats          : loadableStats,
        entrypoints    : [ 'bundle' ],
        inputFileSystem: useFileSystem
    });

    const props = await prefetch(req.url, { token });

    const context: Context = {
        token,
        initialProps: props,
    };

    initializeState(store, { mode, locale });

    const Component = generateAppComponent({
        store,
        context,
        location,
        extractor,
    });

    const template = generateStaticTemplate({
        Component,
        store,
        extractor,
        props,
        mode
    });

    renderTemplate(res, context, template);
}
