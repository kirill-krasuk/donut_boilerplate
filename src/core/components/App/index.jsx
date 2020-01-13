// @flow

import React, { useEffect }         from 'react';
import type { ComponentType, Node } from 'react';
import { Provider }                 from 'react-redux';
import { hot }                      from 'react-hot-loader/root';

import Router                       from 'core/components/Router';
import { store, history }           from 'core/utils/store';
import type { iConfigManager }      from 'core/interfaces/ConfigManager';
import { ConfigManager }            from 'core/services';
import ErrorBoundary                from '../ErrorBoundary';
import ReadyWrapper                 from '../ReadyWrapper';

const configManager: iConfigManager = new ConfigManager();

configManager.defaultValues({
    apiHost: 'https://jsonplaceholder.typicode.com',
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
