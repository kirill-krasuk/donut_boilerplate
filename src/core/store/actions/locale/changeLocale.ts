import { createActionCreator } from '@core/utils/redux/action';
import { ChangeLocale }        from '@core/types/locale';

export const changeLocaleAction = createActionCreator<ChangeLocale>()('core/CHANGE_LOCALE');
