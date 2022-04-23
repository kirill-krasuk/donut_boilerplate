import loadable from '@loadable/component';

export const Button = loadable(
	() => import(/* webpackChunkName: "Button" */ './Button'),
	{
		fallback: <div>Loading..</div>
	}
);

export { ButtonSizes, ButtonStyles } from './enums';
