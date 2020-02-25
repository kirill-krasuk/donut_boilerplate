import { EModals }          from '@app/enums/modal';
import { put }              from 'redux-saga/effects';
import { SagaIterator }     from 'redux-saga';

import { callModalAction }  from '@core/actions/modal';
import { snakeToCamel }     from '@core/utils/string';
import { EStringFormatter } from '@core/enums/string';

export function* locationObserve({ payload }: Record<string, any>): SagaIterator {
    const { location: { search } } = payload;

    const regExp = /action/;

    const patterns = search
        .replace('?', '')
        .split('&');

    const calledModalQuery = patterns.find((item: string) => regExp.test(item));

    if (calledModalQuery) {
        const [ , modalId ]: [void, EModals] = calledModalQuery.split('=');

        yield put(callModalAction(snakeToCamel(modalId, EStringFormatter.Upper)));
    }
}
