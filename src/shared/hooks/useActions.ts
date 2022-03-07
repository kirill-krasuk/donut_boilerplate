import { useDispatch }        from 'react-redux';
import { bindActionCreators } from '@reduxjs/toolkit';

import * as coreActions       from '@client/store/actions';

export function useActions() {
    const dispatch = useDispatch();

    return bindActionCreators({
        ...coreActions,
    }, dispatch);
}
