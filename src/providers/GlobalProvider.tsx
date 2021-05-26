import React, { Dispatch, FC, Reducer, useReducer } from 'react';
import { GlobalContext } from '../context';

interface GlobalState {
  type: string;
  count: number;
}

type Action =
  | { type: 'RESET'; event: React.MouseEvent<HTMLElement, Event> }
  | { type: 'COUNT_DOWN'; event: React.MouseEvent<HTMLElement, Event> }
  | { type: 'COUNT_UP'; event: React.MouseEvent<HTMLElement, Event> };

const initialState: GlobalState = { type: 'INITIALIZE', count: 0 };

const reducer: Reducer<GlobalState, Action> = (state, action) => {
  console.log(action.type, action);
  switch (action.type) {
    case 'COUNT_DOWN':
      const COUNT_DOWN = { ...state, type: action.type, count: state.count - 1 };
      return COUNT_DOWN;
    case 'COUNT_UP':
      const COUNT_UP = { ...state, type: action.type, count: state.count + 1 };
      return COUNT_UP;
    case 'RESET':
      return initialState;
    default:
      return initialState;
  }
};

const GlobalProvider: FC = ({ children }) => {
  const [globalState, globalDispatch] = useReducer(reducer, initialState);

  console.log('globalState', globalState);

  return <GlobalContext.Provider value={{ globalState, globalDispatch }}>{children}</GlobalContext.Provider>;
};

export interface GlobalContextState {
  globalState: GlobalState;
  globalDispatch: Dispatch<Action>;
}

export default GlobalProvider;
