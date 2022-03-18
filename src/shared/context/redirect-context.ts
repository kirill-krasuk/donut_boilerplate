import { createContext } from 'react';

export const redirectContext = createContext<any>(null);

export const { Provider: RedirectContextProvider } = redirectContext;
