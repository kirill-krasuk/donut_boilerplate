// @flow
import React, { useEffect }         from 'react';
import type { ComponentType, Node } from 'react';
import { Provider }                 from 'react-redux';
import { hot }                      from 'react-hot-loader/root';

import Router                       from 'core/components/Router';
import { store, history }           from 'core/utils/store';
import { container }                from 'core/services/inversify';
import { TYPES }                    from 'core/services/types';
import type { iConfigManager }      from 'core/interfaces/ConfigManager';
import ErrorBoundary                from '../ErrorBoundary';

const configManager: iConfigManager = container.get(TYPES.ConfigManager);

configManager.defaultValues({
    apiHost   : 'https://jsonplaceholder.typicode.com',
    apiPort   : '',
    apiPreffix: '',
    apiVersion: ''
});

const App: ComponentType<{}> = (): Node => {
    useEffect(() => {
        const http = container.get(TYPES.HTTP);

        console.log(http.query);

        http.query = {
            number : 1,
            string : 'str',
            boolean: false,
            array  : [ 1, 2, 3 ]
        };

        http.query = {
            ...http.query,
            array2: [ 3, 2, 1 ]
        };

        console.log(http.query);

        window.onload = function () {
            const storage = document.getElementById('ssr-store');

            if (storage && storage.parentNode) {
                storage.parentNode.removeChild(storage);
            }
        };
    });

    return (
        <ErrorBoundary>
            <Provider store={ store }>
                <Router history={ history } />
            </Provider>
        </ErrorBoundary>
    );
};

export default hot(App);
