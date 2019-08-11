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
import ReadyWrapper                 from '../ReadyWrapper';

const configManager: iConfigManager = container.get(TYPES.ConfigManager);

configManager.defaultValues({
    apiHost   : 'https://jsonplaceholder.typicode.com',
    apiPort   : '',
    apiPreffix: '',
    apiVersion: ''
});

const App: ComponentType<{}> = (): Node => {
    useEffect(() => {
        window.onload = function () {
            const storage = document.getElementById('ssr-store');

            if (storage && storage.parentNode) {
                storage.parentNode.removeChild(storage);
            }
        };
    }, []);

    return (
        <ErrorBoundary>
            <Provider store={ store }>
                <ReadyWrapper>
                    <Router history={ history } />
                </ReadyWrapper>
            </Provider>
        </ErrorBoundary>
    );
};

export default hot(App);
