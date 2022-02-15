import { useContext } from 'react';

import { context }    from '@client/components/RedirectProvider/context';

export function useInitialProps<T>() {
    const data = useContext<T>(context);

    return data;
}
