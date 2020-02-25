import { createAction }     from 'typesafe-actions';

import { IsFirstRendering } from '@core/types/location';

export const IS_FIRST_RENDERING: IsFirstRendering['type'] = 'core/IS_FIRST_RENDERING';
export const isFirstRenderingAction = createAction(IS_FIRST_RENDERING)<IsFirstRendering['payload']>();
