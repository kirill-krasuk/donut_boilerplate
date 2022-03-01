// TODO: refactor dependency
import { Context } from '@server/types/context';

const getInitialPropsFromDOM = () => {
    if (Reflect.has(window, '__INITIAL_PROPS__')) {
        return (window as any).__INITIAL_PROPS__;
    }

    return {};
};

export function getInitialProps(serverContext?: Context) {
    return __IS_CLIENT__
        ? getInitialPropsFromDOM()
        : serverContext?.initialProps;
}
