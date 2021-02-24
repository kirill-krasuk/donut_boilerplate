import { rootReducer } from '@core/utils/store';

export type RootState = Omit<ReturnType<typeof rootReducer>, '$CombinedState'>;
