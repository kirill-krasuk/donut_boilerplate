import { ComponentType } from 'react';
import { Provider }      from 'react-redux';

import { store }         from '@client/store';

export function withStore<T>(Component: ComponentType<T>) {
    function StoreProvider(props: T) {
        return (
            <Provider store={ store }>
                <Component { ...props } />
            </Provider>
        );
    }

    StoreProvider.displayName = `withStore(${ Component.displayName })`;

    return StoreProvider;
}
