import { Action }                 from '@core/types/actions';
import { Store }                  from '@core/types/store';
import { isFirstRenderingAction } from '@core/actions/location';
import { getIsFirstRendering }    from '@core/selectors/location';

export const locationMiddleware = ({ dispatch, getState }: Store) => (next: Function) => ({ type, payload }: Action): Function => {
    const isFirstRendering = getIsFirstRendering(getState());

    if (type === '@@router/LOCATION_CHANGE' && payload.isFirstRendering !== isFirstRendering) {
        dispatch(isFirstRenderingAction(payload.isFirstRendering));
    }

    return next({ type, payload });
};
