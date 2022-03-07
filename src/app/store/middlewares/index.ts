import { localeModel } from '@entities/locale';
import { themeModel }  from '@entities/theme';

export default [
    localeModel.middleware,
    themeModel.middleware
];
