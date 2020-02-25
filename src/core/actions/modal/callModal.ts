import { createAction } from 'redux-actions';

import { CallModal }    from '@core/types/modal';

export const CALL_MODAL: CallModal['type'] = 'core/CALL_MODAL';
export const callModalAction = createAction<CallModal['payload']>(CALL_MODAL);
