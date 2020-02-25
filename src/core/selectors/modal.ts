import { createSelector } from 'reselect';
import R                  from 'ramda';

const selectModal: (state: Record<string, any>) => string = R.prop('modal');

export const getModalId = createSelector<object, ReturnType<typeof selectModal>, string>(
    selectModal,
    R.prop('id')
);

export const getHasModal = createSelector<object, ReturnType<typeof getModalId>, boolean>(
    getModalId,
    R.complement(R.isNil)
);
