// @flow

import { createAction }    from 'redux-actions';

import type { FetchType }  from 'core/types/fetch';

type Type = $PropertyType<FetchType, 'type'>;
type Payload = $PropertyType<FetchType, 'payload'>;

export const FETCH: Type = 'core/FETCH';
export const fetchAction = createAction<Type, Payload>(FETCH);
