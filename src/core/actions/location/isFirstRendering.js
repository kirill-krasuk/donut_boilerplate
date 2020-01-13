// @flow
import { createAction }              from 'redux-actions';

import type { IsFirstRenderingType } from 'core/types/location';

type Type = $PropertyType<IsFirstRenderingType, 'type'>;
type Payload = $PropertyType<IsFirstRenderingType, 'payload'>;

export const IS_FIRST_RENDERING: Type = 'core/IS_FIRST_RENDERING';
export const isFirstRenderingAction = createAction<Type, Payload>(IS_FIRST_RENDERING);
