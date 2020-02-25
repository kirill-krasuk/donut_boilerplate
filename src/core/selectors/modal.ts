import { createSelector } from 'reselect';
import R                  from 'ramda';

import { Selector }       from '@core/types/selector';
import { ModalState }     from '@core/types/modal';

const selectModal: Selector<ModalState> = R.prop('modal');

export const getModalId = createSelector<object, ReturnType<typeof selectModal>, string>(
    selectModal,
    R.prop('id')
);

export const getHasModal = createSelector<object, ReturnType<typeof getModalId>, boolean>(
    getModalId,
    R.complement(R.isNil)
);
