// @flow

import { takeEvery }  from 'redux-saga/effects';
import type { Saga }  from 'redux-saga';

import * as actions   from 'core/actions/modal';
import { callModal }  from './callModal';
import { closeModal } from './closeModal';

export default function* (): Saga<void> {
    yield takeEvery(actions.CALL_MODAL, callModal);
    yield takeEvery(actions.CLOSE_MODAL, closeModal);
}
