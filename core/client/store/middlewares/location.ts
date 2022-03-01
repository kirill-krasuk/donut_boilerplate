import { Middleware }             from 'redux';

import { isFirstRenderingAction } from '@client/store/actions/location';
import { getIsFirstRendering }    from '@client/store/selectors/location';
import { Action }                 from '@lib/redux';

export const locationMiddleware: Middleware = ({ dispatch, getState }) => (next: Function) => ({ type, payload }: Action) => {
    const isFirstRendering = getIsFirstRendering(getState());

    if (type === '@@router/LOCATION_CHANGE' && payload.isFirstRendering !== isFirstRendering) {
        dispatch(isFirstRenderingAction(payload.isFirstRendering));
    }

    return next({ type, payload });
};
