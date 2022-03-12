import { useContext } from 'react';

// TODO: refactor dependency
import { context }    from '@app/components/RedirectProvider/context';

export function useInitialProps<T>() {
    return useContext<T>(context);
}
