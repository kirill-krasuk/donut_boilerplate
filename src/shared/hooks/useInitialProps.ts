import { useContext } from 'react';

import { context }    from '@core/components/RedirectProvider/context';

export function useInitialProps<T>() {
    const data = useContext<T>(context);

    return data;
}
