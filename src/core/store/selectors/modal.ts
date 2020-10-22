import { createSelector } from 'reselect';
import R                  from 'ramda';

import { Selector }       from '@core/types/selector';
import { ModalState }     from '@core/types/modal';

const selectModal: Selector<ModalState> = R.prop('modal');

export const getModalIdOption = createSelector(
    [ selectModal ],
    R.prop('id')
);

// TODO: check this method
export const getHasModal = createSelector(
    getModalIdOption,
    R.complement(R.isNil)
);
