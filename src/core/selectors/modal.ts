import { createSelector } from 'reselect';
import R                  from 'ramda';
import * as O             from 'fp-ts/lib/Option';

import { Selector }       from '@core/types/selector';
import { ModalState }     from '@core/types/modal';
import { EModals }        from '@app/enums/modal';

const selectModal: Selector<ModalState> = R.prop('modal');

export const getModalIdOption = createSelector<object, ReturnType<typeof selectModal>, O.Option<EModals>>(
    selectModal,
    (state) => O.fromNullable(R.prop('id')(state))
);

// TODO: check this method
export const getHasModal = createSelector<object, ReturnType<typeof getModalIdOption>, boolean>(
    getModalIdOption,
    R.complement(R.isNil)
);
