import { useDispatch }        from 'react-redux';
import { bindActionCreators } from 'redux';

import * as coreActions       from '@core/store/actions';
import * as appAction         from '@app/store/actions';

export function useActions() {
    const dispatch = useDispatch();

    return bindActionCreators({
        ...coreActions,
        ...appAction
    }, dispatch);
}
