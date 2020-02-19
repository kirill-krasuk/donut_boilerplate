import { createAction } from 'redux-actions';
import { ReadyType }    from '@core/types/ready';

export const READY: ReadyType['type'] = 'core/READY';
export const readyAction = createAction<ReadyType['payload']>(READY);
