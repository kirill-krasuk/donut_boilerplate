import { createActionCreator } from '@lib/redux';
import { Ready }               from '@client/store/types/ready';

export const readyAction = createActionCreator<Ready>()('core/READY');
