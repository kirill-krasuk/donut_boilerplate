import { compose }             from 'ramda';

import { withClientLocales }   from './with-locales';
import { withModals }          from './with-modals';
import { withClientRouter }    from './with-router';
import { withClientSideStore } from './with-store';
import { withGlobalStyles }    from './with-styles';
import { withClientTheme }     from './with-theme';

const withAppProviders = compose(
	withClientSideStore,
	withClientLocales,
	withClientTheme,
	withGlobalStyles,
	withClientRouter,
	withModals
);

export { withAppProviders };
