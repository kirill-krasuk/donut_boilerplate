import { createAction }         from 'redux-actions';

import { IsFirstRenderingType } from '@core/types/location';

export const IS_FIRST_RENDERING: IsFirstRenderingType['type'] = 'core/IS_FIRST_RENDERING';
export const isFirstRenderingAction = createAction<IsFirstRenderingType['payload']>(IS_FIRST_RENDERING);
