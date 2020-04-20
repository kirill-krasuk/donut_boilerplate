import React, { useEffect } from 'react';
import { Provider }         from 'react-redux';
import { hot }              from 'react-hot-loader/root';
import { fromEvent }        from 'rxjs';
import * as I               from 'fp-ts/lib/IO';
import * as O               from 'fp-ts/lib/Option';
import { pipe }             from 'fp-ts/lib/pipeable';

import Router               from '@core/components/Router';
import { store, history }   from '@core/utils/store';
import { ConfigManager }    from '@core/services';
import ErrorBoundary        from '../ErrorBoundary';
import ReadyWrapper         from '../ReadyWrapper';

// manual connection of fonts
// import './fonts.css';

const configManager = new ConfigManager();

configManager.defaultValues({
    apiHost: 'https://jsonplaceholder.typicode.com',
});

const reduxDOMContainer: I.IO<O.Option<HTMLElement>> = () => O.fromNullable(document.getElementById('ssr-store'));

const clearReduxContainer: I.IO<void> = () => {
    pipe(
        reduxDOMContainer(),
        O.map(storage => {
            storage.parentNode && storage.parentNode.removeChild(storage);

            return O.none;
        })
    );
};

const App: React.FC = (): JSX.Element => {
    useEffect(() => {
        fromEvent(window, 'load')
            .subscribe(clearReduxContainer);
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
