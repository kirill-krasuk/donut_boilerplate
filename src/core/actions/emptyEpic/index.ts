import { createAction } from 'typesafe-actions';

import { EmptyEpic }    from '@core/types/empty';

export const EMPTY_EPIC: EmptyEpic['type'] = 'core/EMPTY_EPIC';
export const emptyEpicAction = createAction(EMPTY_EPIC)<EmptyEpic['payload']>();
