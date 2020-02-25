import { createAction }     from 'redux-actions';

import { IsFirstRendering } from '@core/types/location';

export const IS_FIRST_RENDERING: IsFirstRendering['type'] = 'core/IS_FIRST_RENDERING';
export const isFirstRenderingAction = createAction<IsFirstRendering['payload']>(IS_FIRST_RENDERING);
