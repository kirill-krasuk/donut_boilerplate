import { ComponentType } from 'react';

import { ModalManager }  from './ModalManager';

export function withModals(Component: ComponentType) {
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
