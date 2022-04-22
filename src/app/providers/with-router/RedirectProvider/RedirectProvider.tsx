import { getInitialProps }         from '@lib/react';
import { RedirectContextProvider } from '@shared/context/redirect-context';

import { useRedirect }             from './hooks';

import type { FC }                 from 'react';
import type { Props }              from './types';

/**
 * Server Side Component
 *
 * Use for extend with auth redirect logic
 */
const RedirectProvider: FC<Props> = ({ context: serverContext, children }) => {
	useRedirect(serverContext);

	return (
		<RedirectContextProvider value={ { ...getInitialProps(serverContext) } }>
			{ children }
		</RedirectContextProvider>
	);
};

export { RedirectProvider };
