import { useContext } from 'react';

import { context }    from '@core/components/HTTPProvider/context';

export function useInitialProps<T>() {
    const data = useContext<T>(context);

    return data;
}
