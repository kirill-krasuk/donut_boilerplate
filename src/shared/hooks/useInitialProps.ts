import { useContext }      from 'react';

import { redirectContext } from '@shared/context/redirect-context';

function useInitialProps<T>() {
	return useContext<T>(redirectContext);
}

export { useInitialProps };
