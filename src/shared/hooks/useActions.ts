import { useDispatch }        from 'react-redux';
import { bindActionCreators } from 'redux';

import * as coreActions       from '@client/store/actions';

export function useActions() {
    const dispatch = useDispatch();

    return bindActionCreators({
        ...coreActions,
    }, dispatch);
}
