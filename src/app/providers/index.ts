import { compose }          from 'ramda';

import { withGlobalStyles } from './withGlobalStyles';
import { withStore }        from './withStore';
import { withLocales }      from './withLocales';
import { withTheme }        from './withTheme';
import { withRouter }       from './withRouter';

export const withAppProviders = compose(
    withStore,
    withLocales,
    withRouter
);

export const withRootProviders = compose(
    withTheme,
    withGlobalStyles
);

export const RootProviders = withRootProviders(() => null);
