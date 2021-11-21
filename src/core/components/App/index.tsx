import { useEffect, FC } from 'react';
import { Provider }      from 'react-redux';

import Router            from '@core/components/Router';
import { store }         from '@core/store';
import ErrorBoundary     from '../ErrorBoundary';
import ReadyWrapper      from '../ReadyWrapper';

// manual connection of fonts
// import './fonts.css';

const fromServerData = (containerID: string) => document.getElementById(containerID);

const clearContainer = (container: HTMLElement | null) => container
    && container.parentNode
    && container.parentNode.removeChild(container);

const clearServerDataContainer = () => {
    [ 'ssr-store', 'initial-props' ]
        .map(fromServerData)
        .forEach(clearContainer);
};

const App: FC = () => {
    useEffect(() => {
        clearServerDataContainer();
    }, []);

    return (
        <ErrorBoundary>
            <Provider store={ store }>
                <ReadyWrapper>
                    <Router />
                </ReadyWrapper>
            </Provider>
        </ErrorBoundary>
    );
};

export default App;
