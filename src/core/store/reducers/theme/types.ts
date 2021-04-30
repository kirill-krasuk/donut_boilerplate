import { InferValueTypes } from '@core/types/utility';
import { ThemeState }      from '@core/types/theme';
import * as actions        from '@core/store/actions/theme';

export type State = ThemeState;

export type Action = ReturnType<InferValueTypes<typeof actions>>;
