import loadable from '@loadable/component';

const Button = loadable(() => import(/* webpackChunkName: "Button" */ './Button'), {
	fallback: <div>
		Loading..
	</div>
});

export { ButtonSizes, ButtonThemes } from './enums';
export { Button };
