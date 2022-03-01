import { createActionCreator } from '@lib/redux';
import { ChangeLocale }        from '@app/types/locale';

export const changeLocaleAction = createActionCreator<ChangeLocale>()('core/CHANGE_LOCALE');
