// @flow

import { put, select }                               from 'redux-saga/effects';
import type{ Saga }                                  from 'redux-saga';
import { getLocation, push }                         from 'connected-react-router';

import { setModalAction, setModalHistoryFlagAction } from 'core/actions/modal';

export function* closeModal(): Saga<void> {
    const { search, pathname } = yield select(getLocation);

    const hasActionPattern = /action/.test(search);

    if (hasActionPattern) {
        yield put(push(pathname));
    }

    yield put(setModalAction(null));
    yield put(setModalHistoryFlagAction(false));
}
