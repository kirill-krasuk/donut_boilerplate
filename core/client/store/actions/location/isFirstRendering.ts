import { createActionCreator } from '@lib/redux';
import { IsFirstRendering }    from '@client/store/types/location';

export const isFirstRenderingAction = createActionCreator<IsFirstRendering>()('core/IS_FIRST_RENDERING');
