import { LocalesProvider }                       from './LocalesProvider';

import type { ComponentType, PropsWithChildren } from 'react';

function withLocales(Component: ComponentType<PropsWithChildren<unknown>>) {
	function LocalesWrapper() {
		return (
			<LocalesProvider>
				<Component />
			</LocalesProvider>
		);
	}

	LocalesWrapper.displayName = 'withLocalesProvider';

	return LocalesWrapper;
}

export { withLocales };
