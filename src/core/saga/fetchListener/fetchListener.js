// @flow

import { call, put }        from 'redux-saga/effects';
import type { Saga }        from 'redux-saga';

import type { FetchType }   from 'core/types/fetch';
import type { iHTTP }       from 'core/interfaces/HTTP';
import { HTTP }             from 'core/services';


export function* fetchListener({ payload }: FetchType): Saga<void> {
    const http: iHTTP = new HTTP();

    const {
        body: httpBody,
        query,
        route,
        onSuccess: successHandler,
        onError: errorHandler,
        startHandler,
        finallyHandler
    } = payload;

    http.body  = { ...httpBody };
    http.query = { ...query };

    if (startHandler) {
        startHandler();
    }

    try {
        const { body } = yield call(http.fetch, route);

        if (body && successHandler) {
            yield put(successHandler(body));
        }
    } catch (err) {
        window.console.log(err);

        if (errorHandler) {
            yield put(errorHandler(err));
        }
    } finally {
        if (finallyHandler) {
            finallyHandler();
        }
    }
}
