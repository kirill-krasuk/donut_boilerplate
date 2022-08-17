import loadable from '@loadable/component';

const Header = loadable(() => import(/* webpackChunkName: "Header" */ './Header'), {
	fallback: <div>
		Loading...
	</div>
});

export { Header };
