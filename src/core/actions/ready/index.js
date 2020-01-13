// @flow

import { createAction }    from 'redux-actions';

import type { ReadyType }  from 'core/types/ready';

type Type = $PropertyType<ReadyType, 'type'>;
type Payload = $PropertyType<ReadyType, 'payload'>;

export const READY: Type = 'core/READY';
export const readyAction = createAction<Type, Payload>(READY);
