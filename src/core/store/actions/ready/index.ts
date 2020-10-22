import { createAction } from 'typesafe-actions';
import { Ready }        from '@core/types/ready';

export const READY: Ready['type'] = 'core/READY';
export const readyAction = createAction(READY)<Ready['payload']>();
