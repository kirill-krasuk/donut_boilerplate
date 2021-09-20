import { createActionCreator } from '@utils/redux/action';
import { CallModal }           from '@core/types/modal';

export const callModalAction = createActionCreator<CallModal>()('core/CALL_MODAL');
