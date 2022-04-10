import { ComponentType, PropsWithChildren } from 'react';
import { Provider }                         from 'react-redux';

import { store }                            from '../../store';

export function withStore(Component: ComponentType<PropsWithChildren<unknown>>) {
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
