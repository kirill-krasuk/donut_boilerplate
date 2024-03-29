import { matchRoutes }           from 'react-router-dom';

import { routes }                from '@app/routes';

import type { RouteForPrefetch } from '@lib/react';

async function prefetch(url: string, auth: any = null) {
	const [ pathname, query ] = url.split('?');

	/**
	 * appRoute on first element in array
	 * because zero element is Root Wrapper Component
	 */
	const [ , appRoute ] = matchRoutes(routes, pathname)!;

	if (appRoute?.route) {
		const { route }   = appRoute;
		const { element } = route as RouteForPrefetch;

		if (element.type.prefetch) {
			return element.type.prefetch({ query }, auth);
		}
	}

	return {};
}

export { prefetch };
