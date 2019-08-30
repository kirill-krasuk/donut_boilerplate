// @flow
import { put, take }   from 'redux-saga/effects';
import type { Saga }   from 'redux-saga';

import api             from 'app/routes/api';
import { fetchAction } from 'core/actions/fetch';

export function* fetchForTest(): Saga<void> {
    yield put(fetchAction({
        route         : api.test.getPosts,
        successHandler: payload => ({
            type: 'FETCH_TEST_SUCCESS',
            payload
        })
    }));

    const { payload } = yield take('FETCH_TEST_SUCCESS');

    window.console.log(payload);
}
