import { compose }          from 'ramda';

import { withGlobalStyles } from './with-styles';
import { withStore }        from './with-store';
import { withLocales }      from './with-locales';
import { withTheme }        from './with-theme';
import { withRouter }       from './with-router';
import { withModals }       from './with-modals';

const withAppProviders = compose(
	withStore,
	withLocales,
	withTheme,
	withGlobalStyles,
	withRouter,
	withModals
);

export { withAppProviders };
