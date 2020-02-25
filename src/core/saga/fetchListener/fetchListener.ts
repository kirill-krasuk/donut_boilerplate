import { call, put }    from 'redux-saga/effects';
import { SagaIterator } from 'redux-saga';

import { Fetch }        from '@core/types/fetch';
import { HTTP }         from '@core/services';

export function* fetchListener({ payload }: Fetch): SagaIterator {
    const http = new HTTP();

    const {
        body: httpBody,
        query,
        route,
        onSuccess: successHandler,
        onError: errorHandler,
        startHandler,
        finallyHandler
    } = payload;

    http.setBody({ ...httpBody });
    http.setQuery({ ...query });

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
