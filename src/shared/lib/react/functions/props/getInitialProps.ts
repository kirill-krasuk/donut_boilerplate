import type { Context } from '@shared/types/client-server';

const getInitialPropsFromDOM = () => {
	if (Reflect.has(window, '__INITIAL_PROPS__')) {
		return (window as any).__INITIAL_PROPS__;
	}

	return {};
};

function getInitialProps(serverContext?: Context) {
	return __IS_CLIENT__
		? getInitialPropsFromDOM()
		: serverContext?.initialProps;
}

export { getInitialProps };
