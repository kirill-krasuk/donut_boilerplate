import { createActionCreator } from '@core/utils/redux/action';
import { EmptyEpic }           from '@core/types/empty';

export const emptyEpicAction = createActionCreator<EmptyEpic>()('core/EMPTY_EPIC');
