'use client'

import React from 'react';
import { Provider } from '@/../shared/dist/todo/components/DashboardContext';
import {Todo} from '@/../shared/dist/todo/domain/Todo';

async function getTodos() {
  const res = await fetch('http://localhost:3000/api/todos');

  if (!res.ok) {
    throw new Error('Fetch todos failed');
  }

  return res.json() as unknown as Todo[];
}

export default function DashboardContainer({ children }: { children: React.ReactNode }) {
  const [ state, setState ] = React.useState<{ todos: Todo[] }>({ todos: [] });

  React.useEffect(() => {
    getTodos().then((todos) => {
      setState({ todos });
    });
  }, []);

  const handleAddTodo = React.useCallback(() => {
    setState({ todos: [
      ...state.todos,
      {
        id: Math.random().toString(),
        todo: Math.random().toString(),
        done: false,
      },
    ] })
  }, [ state ]);

  return (
    <>
      <Provider value={state}>
        {children}
      </Provider>
      <button onClick={handleAddTodo}>{`Add todo, current count: ${state.todos.length}`}</button>
    </>
  );
}
