import React, { useEffect }               from 'react';
import { Provider }                       from 'react-redux';
import { hot }                            from 'react-hot-loader/root';

import Router                             from '@core/components/Router';
import { store, history }                 from '@core/utils/store';
import { ConfigManager, IteratorCreator } from '@core/services';
import ErrorBoundary                      from '../ErrorBoundary';
import ReadyWrapper                       from '../ReadyWrapper';

const configManager = new ConfigManager();

configManager.defaultValues({
    apiHost: 'https://jsonplaceholder.typicode.com',
});

const iterator = new IteratorCreator().createFrom({ a: '1', b: '2', c: '3' });

iterator.entries();
iterator.keys();
iterator.values();

const App: React.FC = (): JSX.Element => {
    useEffect(() => {
        window.onload = function (): void {
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
