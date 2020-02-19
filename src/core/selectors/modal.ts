import { createSelector } from 'reselect';
import R                  from 'ramda';

const selectModal = R.prop('modal');

export const getModalId = createSelector(
    selectModal,
    R.prop('id')
);

export const getHasModal = createSelector(
    getModalId,
    R.complement(R.isNil)
);
