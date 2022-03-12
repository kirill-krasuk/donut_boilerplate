import { useContext } from 'react';

// TODO: refactor dependency
import { context }    from '@client/components/RedirectProvider/context';

export function useInitialProps<T>() {
    return useContext<T>(context);
}
