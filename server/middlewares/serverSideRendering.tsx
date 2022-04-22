import { ChunkExtractor }                               from '@loadable/server';

import { localeModel }                                  from '@entities/locale';
import { themeModel }                                   from '@entities/theme';
import { store }                                        from '@app/store';
import { prefetch, initializeState }                    from '@server/lib/client-server';
import { generateAppComponent, generateStaticTemplate } from '@server/lib/react';
import { renderTemplate }                               from '@server/lib/server/render';
import { getLoadableChunksOptions }                     from '@server/lib/webpack';
import { headers }                                      from '@server/constants/headers';

import type { Context }                                 from '@shared/types/client-server';
import type { Request, Response }                       from 'express';

async function serverSideRendering(req: Request, res: Response): Promise<void> {
	res.set(...headers.sw);
	res.set(...headers.isCacheable);

	const { loadableStats, useFileSystem } = getLoadableChunksOptions(res.locals);

	const location = req.url;

	const {
		theme: mode = themeModel.initialState.mode,
		locale = localeModel.initialState,
		token
	} = req.cookies;

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

	initializeState(store, {
		mode,
		locale
	});

	const Component = generateAppComponent({
		store,
		context,
		location,
		extractor
	});

	const template = await generateStaticTemplate({
		Component,
		store,
		extractor,
		props,
		mode
	});

	renderTemplate(res, context, template);
}

export { serverSideRendering };
