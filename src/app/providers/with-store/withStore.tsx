import { ComponentType } from 'react';
import { Provider }      from 'react-redux';

import { store }         from '../../store';

export function withStore(Component: ComponentType) {
    function StoreProvider() {
        return (
            <Provider store={ store }>
                <Component />
            </Provider>
        );
    }

    StoreProvider.displayName = `withStore(${ Component.displayName })`;

    return StoreProvider;
}
