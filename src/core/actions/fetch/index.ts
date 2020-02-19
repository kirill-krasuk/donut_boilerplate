import { createAction } from 'redux-actions';

import { FetchType }    from '@core/types/fetch';

export const FETCH: FetchType['type'] = 'core/FETCH';
export const fetchAction = createAction<FetchType['payload']>(FETCH);
