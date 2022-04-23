import { useCallback }  from 'react';
import { useSelector }  from 'react-redux';

import { useActions }   from '@hooks/index';

import * as actions     from '../store/actions';
import { getLocale }    from '../store/selectors';
import { toggleLocale } from '../../lib/toggleLocale';

function useLocale() {
	const { changeLocale } = useActions(actions);

	const locale = useSelector(getLocale);

	const handleChangeLocale = useCallback(() => {
		changeLocale(toggleLocale(locale));
	}, [ changeLocale, locale ]);

	return {
		locale,
		handleChangeLocale
	};
}

export { useLocale };
