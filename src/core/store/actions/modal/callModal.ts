import { createActionCreator } from '@core/utils/redux/action';
import { CallModal }           from '@core/types/modal';

export const callModalAction = createActionCreator<CallModal>()('core/CALL_MODAL');
