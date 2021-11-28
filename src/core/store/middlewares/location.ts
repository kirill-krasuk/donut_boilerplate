import { Middleware }             from 'redux';

import { isFirstRenderingAction } from '@core/store/actions/location';
import { getIsFirstRendering }    from '@core/store/selectors/location';
import { Action }                 from '@core/types/actions';

export const locationMiddleware: Middleware = ({ dispatch, getState }) => (next: Function) => ({ type, payload }: Action) => {
    const isFirstRendering = getIsFirstRendering(getState());

    if (type === '@@router/LOCATION_CHANGE' && payload.isFirstRendering !== isFirstRendering) {
        dispatch(isFirstRenderingAction(payload.isFirstRendering));
    }

    return next({ type, payload });
};
