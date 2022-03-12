import { useEffect, FC }            from 'react';

import { withAppProviders }         from '@app/providers';
import { clearServerDataContainer } from './lib';

// manual connection of fonts
// import './styles/fonts.css';

const App: FC = () => {
    useEffect(() => {
        clearServerDataContainer();
    }, []);

    return null;
};

App.displayName = 'App';

export default withAppProviders(App);
