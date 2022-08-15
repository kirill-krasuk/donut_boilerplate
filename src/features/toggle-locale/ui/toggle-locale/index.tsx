import { localeModel } from '@entities/locale';

import * as S          from './styles';

const ToggleLocale = () => {
	const { locale, handleChangeLocale } = localeModel.hooks.useLocale();

	return <S.LocaleButton onClick={ handleChangeLocale }>
		{ locale }
	</S.LocaleButton>;
};

export { ToggleLocale };
