import { ThemeState }   from '@app/types/theme';
import * as actions     from '@client/store/actions/theme';
import { ActionTypeOF } from '@shared/types/actions';

export type State = ThemeState;

export type Action = ActionTypeOF<typeof actions>
