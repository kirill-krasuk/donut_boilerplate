import { Request, Response }        from 'express';
import { ChunkExtractor }           from '@loadable/server';

import { localeModel }              from '@entities/locale';
import { themeModel }               from '@entities/theme';
import { store }                    from '@app/store';
import { prefetch }                 from '@server/utils/prefetch';
import { Context }                  from '@shared/types/client-server';
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
        theme: mode = themeModel.initialState.mode,
        locale = localeModel.initialState,
        token
    } = req.cookies;

    // const { store } = configureStore({});
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
