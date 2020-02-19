import { ActionType }             from '@core/types/actions';
import { StoreType }              from '@core/types/store';
import { isFirstRenderingAction } from '@core/actions/location';
import { getIsFirstRendering }    from '@core/selectors/location';

export const locationMiddleware = ({ dispatch, getState }: StoreType) => (next: Function) => ({ type, payload }: ActionType): Function => {
    const isFirstRendering = getIsFirstRendering(getState());

    if (type === '@@router/LOCATION_CHANGE' && payload.isFirstRendering !== isFirstRendering) {
        dispatch(isFirstRenderingAction(payload.isFirstRendering));
    }

    return next({ type, payload });
};
