import React from 'react';
import { Todo } from '../domain';

export const DashboardContext = React.createContext<{ todos: Todo[] }>({
  todos: [],
});

export const { Provider } = DashboardContext;
