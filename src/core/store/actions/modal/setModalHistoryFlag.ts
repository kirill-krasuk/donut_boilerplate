import { createActionCreator } from '@utils/redux/action';
import { SetModalHistoryFlag } from '@core/types/modal';

export const setModalHistoryFlagAction = createActionCreator<SetModalHistoryFlag>()('core/SET_MODAL_HISTORY_FLAG');
