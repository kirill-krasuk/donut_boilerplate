import { useEffect, FC }                   from 'react';

import { withAppProviders, RootProviders } from '@app/providers';
import { clearServerDataContainer }        from './lib';

// manual connection of fonts
// import './fonts.css';

const App: FC = () => {
    useEffect(() => {
        clearServerDataContainer();
    }, []);

    return <RootProviders />;
};

App.displayName = 'App';

export default withAppProviders(App);
