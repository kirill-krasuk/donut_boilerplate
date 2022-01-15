import { createSelector } from 'reselect';
import R                  from 'ramda';

import { Selector }       from '@core/types/selector';
import { ModalState }     from '@core/types/modal';

const selectModal: Selector<ModalState> = R.prop('modal');

export const getModalId = createSelector(
    [ selectModal ],
    R.prop('id')
);

export const getHasModal = createSelector(
    getModalId,
    R.complement(R.isNil)
);
