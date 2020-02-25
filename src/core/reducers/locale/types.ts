import { ChangeLocale, LocaleState } from '@core/types/locale';

export type State = LocaleState;

export type Action = ChangeLocale['payload'];
