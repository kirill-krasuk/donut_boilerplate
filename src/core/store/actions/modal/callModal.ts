import { createActionCreator } from '@utils/redux/action-creator';
import { CallModal }           from '@core/store/types/modal';

export const callModalAction = createActionCreator<CallModal>()('core/CALL_MODAL');
