import { useDispatch }        from 'react-redux';
import { bindActionCreators } from 'redux';

import * as coreActions       from '@client/store/actions';
import * as appActions        from '@app/store/actions';

export function useActions() {
    const dispatch = useDispatch();

    return bindActionCreators({
        ...coreActions,
        ...appActions
    }, dispatch);
}
