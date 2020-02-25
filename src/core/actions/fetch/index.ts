import { createAction } from 'redux-actions';

import { Fetch }        from '@core/types/fetch';

export const FETCH: Fetch['type'] = 'core/FETCH';
export const fetchAction = createAction<Fetch['payload']>(FETCH);
