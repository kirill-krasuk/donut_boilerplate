import { themeModel }  from '@entities/theme';
import { localeModel } from '@entities/locale';
import { modalsModel } from '@features/modals';

export default {
    locale: localeModel.reducer,
    theme : themeModel.reducer,
    modal : modalsModel.reducer
};
