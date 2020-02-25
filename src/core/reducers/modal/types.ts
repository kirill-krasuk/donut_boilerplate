import { SetModal, SetModalHistoryFlag } from '@core/types/modal';

export type State = {
    id: string | null;
    hasHistory: boolean;
}

export type Action = SetModal | SetModalHistoryFlag;
