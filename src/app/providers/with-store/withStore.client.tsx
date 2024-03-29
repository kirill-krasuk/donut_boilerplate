import { Provider }                              from 'react-redux';

import { store }                                 from '../../store';

import type { ComponentType, PropsWithChildren } from 'react';

function withClientSideStore(Component: ComponentType<PropsWithChildren<unknown>>) {
	function StoreProvider() {
		return (
			<Provider store={ store }>
				<Component />
			</Provider>
		);
	}

	StoreProvider.displayName = 'withStore';

	return StoreProvider;
}

export { withClientSideStore };
