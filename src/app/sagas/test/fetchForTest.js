// @flow
import { put, take }   from 'redux-saga/effects';
import type { Saga }   from 'redux-saga';

import api             from 'app/routes/api';
import { fetchAction } from 'core/actions/fetch';

export function* fetchForTest(): Saga<void> {
    const handleStartFetch = () => {
        console.log('start fetch');
    };

    const handleFinallyFetch = () => {
        console.log('finally');
    };

    yield put(fetchAction({
        route    : api.test.getPosts,
        onSuccess: payload => ({
            type: 'FETCH_TEST_SUCCESS',
            payload
        }),
        startHandler  : handleStartFetch,
        finallyHandler: handleFinallyFetch
    }));

    const { payload } = yield take('FETCH_TEST_SUCCESS');

    window.console.log(payload);
}
