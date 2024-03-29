import { ModalManager }                          from './ModalManager';

import type { ComponentType, PropsWithChildren } from 'react';

function withModals(Component: ComponentType<PropsWithChildren<unknown>>) {
	function ModalProvider() {
		return (
			<>
				<ModalManager />

				<Component />
			</>
		);
	}

	ModalProvider.displayName = 'withModalProvider';

	return ModalProvider;
}

export { withModals };
