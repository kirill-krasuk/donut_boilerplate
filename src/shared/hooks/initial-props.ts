import { useContext }      from 'react';

import { redirectContext } from '@shared/context/redirect-context';

function useInitialProps<T>() {
	const context = useContext<T>(redirectContext);

	if (!context) {
		throw new Error('useInitialProps must be used within a RedirectContextProvider');
	}

	return context;
}

export { useInitialProps };
