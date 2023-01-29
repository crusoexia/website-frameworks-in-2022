import React from 'react';
import type { Dispatch } from 'react';
import type { Action } from '../domain/Action';

export const TodosContext = React.createContext<{
  dispatch?: Dispatch<Action>;
}>({});

export const { Provider, Consumer } = TodosContext;
