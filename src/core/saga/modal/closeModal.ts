import { put, select }                               from 'redux-saga/effects';
import { SagaIterator }                              from 'redux-saga';
import { getLocation, push }                         from 'connected-react-router';

import { setModalAction, setModalHistoryFlagAction } from '@core/actions/modal';

export function* closeModal(): SagaIterator {
    const { search, pathname }: any = yield select(getLocation)!;

    const hasActionPattern = /action/.test(search);

    if (hasActionPattern) {
        yield put(push(pathname));
    }

    yield put(setModalAction(''));
    yield put(setModalHistoryFlagAction(false));
}
