import { useContext }      from 'react';
import { redirectContext } from '@shared/context/redirect-context';

export function useInitialProps<T>() {
    return useContext<T>(redirectContext);
}
