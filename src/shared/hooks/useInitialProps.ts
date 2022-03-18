import { useContext } from 'react';

// TODO: refactor dependency
// eslint-disable-next-line boundaries/element-types
import { context }    from '@app/providers/with-router/RedirectProvider/context';

export function useInitialProps<T>() {
    return useContext<T>(context);
}
