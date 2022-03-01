import { createActionCreator } from '@lib/redux';
import { CallModal }           from '@client/store/types/modal';

export const callModalAction = createActionCreator<CallModal>()('core/CALL_MODAL');
