import type { Context } from '@shared/types/client-server';

const getInitialPropsFromDOM = () =>
	(Reflect.has(window, '__INITIAL_PROPS__')
		? window.__INITIAL_PROPS__
		: {});

const getInitialProps = (serverContext?: Context) =>
	(__IS_CLIENT__
		? getInitialPropsFromDOM()
		: serverContext?.initialProps);

export { getInitialProps };
