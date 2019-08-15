// @flow
import type { SetModalType, SetModalHistoryFlagType } from 'core/types/modal';

export type StateType = {
    id: string | null,
    hasHistory: boolean
}

export type ActionType = SetModalType | SetModalHistoryFlagType;
