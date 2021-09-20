import { rootReducer } from '@core/store';

export type RootState = Omit<ReturnType<typeof rootReducer>, '$CombinedState'>;
