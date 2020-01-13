// @flow

import { isFirstRenderingAction } from 'core/actions/location';
import { getIsFirstRendering }    from 'core/selectors/location';

export const locationMiddleware = ({ dispatch, getState }: Object) => (next: Function) => ({ type, payload }: Object) => {
    const isFirstRendering = getIsFirstRendering(getState());

    if (type === '@@router/LOCATION_CHANGE' && payload.isFirstRendering !== isFirstRendering) {
        dispatch(isFirstRenderingAction(payload.isFirstRendering));
    }

    return next({ type, payload });
};
