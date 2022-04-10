import { ComponentType, PropsWithChildren } from 'react';

import { ModalManager }                     from './ModalManager';

export function withModals(Component: ComponentType<PropsWithChildren<unknown>>) {
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
