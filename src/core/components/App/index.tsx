import { useEffect, FC }            from 'react';
import { Provider }                 from 'react-redux';

import Router                       from '@core/components/Router';
import { store }                    from '@core/store';
import ErrorBoundary                from '../ErrorBoundary';
import ReadyWrapper                 from '../ReadyWrapper';
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
