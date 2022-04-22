import loadable from '@loadable/component';

export const Header = loadable(() => import(/* webpackChunkName: "Header" */ './ui/Header'), {
	fallback: <div>Loading...</div>,
});
