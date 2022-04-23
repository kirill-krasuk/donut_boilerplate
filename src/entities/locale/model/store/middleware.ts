import Cookie              from 'js-cookie';

import { changeLocale }    from './actions';

import type { Middleware } from '@reduxjs/toolkit';

const middleware: Middleware = () => next => action =>
	(action.type === changeLocale.type
		? (Cookie.set('locale', action.payload), next(action))
		: next(action));

export { middleware };
