import { createActionCreator } from '@core/utils/redux/action';
import { SetModalHistoryFlag } from '@core/types/modal';

export const setModalHistoryFlagAction
    = createActionCreator('core/SET_MODAL_HISTORY_FLAG')<SetModalHistoryFlag['payload']>();
