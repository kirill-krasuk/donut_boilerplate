import { compose }                          from 'ramda';

import { withGlobalStyles }                 from '@app/providers/with-styles';

import { withChunkExtractor }               from './with-chunk-extractor';
import { withServerSideStore }              from './with-store';
import { withRoutes, withServerSideRouter } from './with-router';
import { withServerSideLocales }            from './with-locales';
import { withServerSideTheme }              from './with-theme';

const withServerProviders = compose(
	withServerSideStore,
	withServerSideRouter,
	withServerSideLocales,
	withServerSideTheme,
	withChunkExtractor,
	withGlobalStyles,
	withRoutes
);

export { withServerProviders };
