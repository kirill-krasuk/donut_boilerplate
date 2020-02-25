import appEn from '@app/locales/en.json';
import appRu from '@app/locales/ru.json';
import uiEn  from '@ui-kit/locales/en.json';
import uiRu  from '@ui-kit/locales/ru.json';

const en = {
    ...appEn,
    ...uiEn
};

const ru = {
    ...appRu,
    ...uiRu
};

export default {
    en,
    ru
};
