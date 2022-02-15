import { createActionCreator } from '@utils/redux/action-creator';
import { SetModalHistoryFlag } from '@client/store/types/modal';

export const setModalHistoryFlagAction = createActionCreator<SetModalHistoryFlag>()('core/SET_MODAL_HISTORY_FLAG');