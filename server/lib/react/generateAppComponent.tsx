import { Provider }                from 'react-redux';
import { StaticRouter }            from 'react-router-dom/server';
import { ChunkExtractorManager }   from '@loadable/server';

import { Routes }                  from '@app/routes';
import { RedirectProvider }        from '@app/providers/with-router';
import { ThemeProvider }           from '@app/providers/with-theme';
import { GlobalStyles }            from '@app/providers/with-styles';
import { LocalesProvider }         from '@app/providers/with-locales';

import type { GenerateAppOptions } from './types';

function generateAppComponent(options: GenerateAppOptions) {
	const {
		store,
		context,
		location,
		extractor
	} = options;

	return (): JSX.Element => (
		<Provider store={ store }>
			<StaticRouter location={ location }>
				<RedirectProvider context={ context }>
					<LocalesProvider>
						<ThemeProvider>
							<ChunkExtractorManager extractor={ extractor }>
								<>
									<Routes />

									<GlobalStyles />
								</>
							</ChunkExtractorManager>
						</ThemeProvider>
					</LocalesProvider>
				</RedirectProvider>
			</StaticRouter>
		</Provider>
	);
}

export { generateAppComponent };
