import { useEffect, FC }            from 'react';
import { Provider }                 from 'react-redux';

import Router                       from '@client/components/Router';
import ErrorBoundary                from '@client/components/ErrorBoundary';
import ReadyWrapper                 from '@client/components/ReadyWrapper';
import { store }                    from '@client/store';
import { clearServerDataContainer } from './helpers';

// manual connection of fonts
// import './fonts.css';

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
