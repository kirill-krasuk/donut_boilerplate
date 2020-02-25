import { createAction } from 'typesafe-actions';

import { Fetch }        from '@core/types/fetch';

export const FETCH: Fetch['type'] = 'core/FETCH';
export const fetchAction = createAction(FETCH)<Fetch['payload']>();
