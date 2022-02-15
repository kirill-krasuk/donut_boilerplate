import { createActionCreator } from '@utils/redux/action-creator';
import { ChangeLocale }        from '@app/types/locale';

export const changeLocaleAction = createActionCreator<ChangeLocale>()('core/CHANGE_LOCALE');
