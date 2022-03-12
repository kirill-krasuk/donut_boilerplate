import { useEffect, FC }                   from 'react';
import { useDispatch }                     from 'react-redux';

import { readyAction }                     from '@client/store/actions';
import { withAppProviders, RootProviders } from '@app/providers';
import { clearServerDataContainer }        from './lib';

// manual connection of fonts
// import './fonts.css';

const App: FC = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        clearServerDataContainer();
    }, []);

    useEffect(() => {
        dispatch(readyAction());
    }, [ dispatch ]);

    return <RootProviders />;
};

App.displayName = 'App';

export default withAppProviders(App);
