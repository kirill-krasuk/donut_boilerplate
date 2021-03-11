import { createActionCreator } from '@core/utils/redux/action';
import { CallModal }           from '@core/types/modal';

export const callModalAction = createActionCreator('core/CALL_MODAL')<CallModal['payload']>();
