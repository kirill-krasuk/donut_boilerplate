import { put }                                           from 'redux-saga/effects';
import { SagaIterator }                                  from 'redux-saga';
import { push }                                          from 'connected-react-router';

import { CallModalType }                                 from '@core/types/modal';
import { setModalAction, setModalHistoryFlagAction }     from '@core/actions/modal';
import { camelToSnake }                                  from '@core/utils/string';

export function* callModal({ payload }: CallModalType): SagaIterator {
    if (typeof payload === 'string') {
        yield put(setModalAction(payload));

        return;
    }

    try {
        const { history, id } = payload;

        yield put(setModalHistoryFlagAction(history));

        if (history) {
            yield put(push({
                search: `?action=${ camelToSnake(id) }`
            }));

            return;
        }

        yield put(setModalAction(id));
    } catch (err) {
        window.console.log(err);
    }
}
