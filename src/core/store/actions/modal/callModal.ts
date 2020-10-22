import { createAction } from 'typesafe-actions';

import { CallModal }    from '@core/types/modal';

export const CALL_MODAL: CallModal['type'] = 'core/CALL_MODAL';
export const callModalAction = createAction(CALL_MODAL)<CallModal['payload']>();
