import appEn from 'app/locales/en';
import appRu from 'app/locales/ru';
import uiEn  from 'ui/locales/en';
import uiRu  from 'ui/locales/ru';

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
