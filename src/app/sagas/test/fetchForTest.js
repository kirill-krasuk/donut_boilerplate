// @flow
import { call }       from 'redux-saga/effects';
import type { Saga }  from 'redux-saga';

import type { iHTTP } from 'core/interfaces/HTTP';
import { container }  from 'core/services/inversify';
import { TYPES }      from 'core/services/types';
import api            from 'app/routes/api';

export function* fetchForTest(): Saga<void> {
    const http: iHTTP = container.get(TYPES.HTTP);

    try {
        const { body } = yield call(http.fetch, api.test.getPosts);

        console.log(body);
    } catch (err) {
        window.console.log(err);
    }
}
