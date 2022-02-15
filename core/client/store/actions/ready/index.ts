import { createActionCreator } from '@utils/redux/action-creator';
import { Ready }               from '@client/store/types/ready';

export const readyAction = createActionCreator<Ready>()('core/READY');
