import { createAction }  from 'redux-actions';

import { CallModalType } from '@core/types/modal';

export const CALL_MODAL: CallModalType['type'] = 'core/CALL_MODAL';
export const callModalAction = createAction<CallModalType['payload']>(CALL_MODAL);
