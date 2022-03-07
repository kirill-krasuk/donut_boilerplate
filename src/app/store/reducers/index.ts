import { themeModel }  from '@entities/theme';
import { localeModel } from '@entities/locale';

export default {
    locale: localeModel.reducer,
    theme : themeModel.reducer
};
