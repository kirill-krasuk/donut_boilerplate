import { createContext } from 'react';

const redirectContext = createContext<any>(null);

const { Provider: RedirectContextProvider } = redirectContext;

export { redirectContext, RedirectContextProvider };
