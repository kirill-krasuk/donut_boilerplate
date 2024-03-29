import { BrowserRouter }    from 'react-router-dom';

import { Routes }           from '@app/routes';

import { RedirectProvider } from './RedirectProvider';

function withClientRouter() {
	function RouterProvider() {
		return (
			<BrowserRouter>
				<RedirectProvider>
					<Routes />
				</RedirectProvider>
			</BrowserRouter>
		);
	}

	RouterProvider.displayName = 'withRouterProvider';

	return RouterProvider;
}

export { withClientRouter };
