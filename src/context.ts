import { createContext } from 'react';
import { GlobalContextState } from './providers/GlobalProvider';

export const GlobalContext = createContext({} as GlobalContextState);
