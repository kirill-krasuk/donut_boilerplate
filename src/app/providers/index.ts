import { compose }          from 'ramda';

import { withLocales }      from './with-locales';
import { withModals }       from './with-modals';
import { withRouter }       from './with-router';
import { withStore }        from './with-store';
import { withGlobalStyles } from './with-styles';
import { withTheme }        from './with-theme';

const withAppProviders = compose(
	withStore,
	withLocales,
	withTheme,
	withGlobalStyles,
	withRouter,
	withModals
);

export { withAppProviders };
