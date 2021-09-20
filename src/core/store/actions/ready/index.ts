import { createActionCreator } from '@utils/redux/action';
import { Ready }               from '@core/types/ready';

export const readyAction = createActionCreator<Ready>()('core/READY');
