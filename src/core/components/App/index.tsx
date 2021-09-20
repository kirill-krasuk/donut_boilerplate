import { useEffect, FC }  from 'react';
import { Provider }       from 'react-redux';
import { fromEvent }      from 'rxjs';
import * as IO            from 'fp-ts/lib/IO';
import * as O             from 'fp-ts/lib/Option';
import { pipe }           from 'fp-ts/lib/pipeable';
import { sequenceT }      from 'fp-ts/lib/Apply';

import Router             from '@core/components/Router';
import { store, history } from '@core/store';
import ErrorBoundary      from '../ErrorBoundary';
import ReadyWrapper       from '../ReadyWrapper';

// manual connection of fonts
// import './fonts.css';

const fromServerData = (containerID: string): IO.IO<O.Option<HTMLElement>> => () => O.fromNullable(document.getElementById(containerID));

const clearReduxContainer: IO.IO<void> = () => {
    pipe(
        sequenceT(O.option)(
            fromServerData('ssr-store')(),
            fromServerData('initial-props')(),
        ),
        O.map(([ storage, initProps ]) => {
            storage.parentNode && storage.parentNode.removeChild(storage);
            initProps.parentNode && initProps.parentNode.removeChild(initProps);

            return O.none;
        })
    );
};

const App: FC = () => {
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

export default App;
