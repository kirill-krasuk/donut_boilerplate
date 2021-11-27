import { ThemeState }   from '@core/types/theme';
import * as actions     from '@core/store/actions/theme';
import { ActionTypeOF } from '@core/types/action-creators';

export type State = ThemeState;

export type Action = ActionTypeOF<typeof actions>
