import { createAction } from 'redux-actions';
import { Ready }        from '@core/types/ready';

export const READY: Ready['type'] = 'core/READY';
export const readyAction = createAction<Ready['payload']>(READY);
