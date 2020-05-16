import React, { useEffect } from 'react';
import { Provider }         from 'react-redux';
import { hot }              from 'react-hot-loader/root';
import { fromEvent }        from 'rxjs';
import * as I               from 'fp-ts/lib/IO';
import * as O               from 'fp-ts/lib/Option';
import { pipe }             from 'fp-ts/lib/pipeable';

import Router               from '@core/components/Router';
import { store, history }   from '@core/utils/store';
import ErrorBoundary        from '../ErrorBoundary';
import ReadyWrapper         from '../ReadyWrapper';

// manual connection of fonts
// import './fonts.css';

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
        const subscription = fromEvent(window, 'load')
            .subscribe(clearReduxContainer);

        return () => subscription.unsubscribe();
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
