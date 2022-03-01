// TODO: refactoring dependency

import { rootReducer } from '@client/store';

export type RootState = Omit<ReturnType<typeof rootReducer>, '$CombinedState'>;
