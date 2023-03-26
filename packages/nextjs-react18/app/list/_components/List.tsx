'use client'

import React from 'react';
import TodoList from 'shared/dist/todo/components/TodoList';
import { getTodos, reducer } from 'shared/dist/todo/reducer';
import { Provider } from 'shared/dist/todo/components/TodosContext';
import { Todo } from 'shared/dist/todo/domain';
import Loading from '@/components/Loading';

async function getData() {
  const res = await fetch('http://localhost:3000/api/todos');
  return res.json() as unknown as Todo[];
}

export default function List() {
  const [ state, dispatch ] = React.useReducer(reducer, { todos: [] });
  const [ initialized, setInitialized ] = React.useState(false);
  const context = React.useMemo(() => {
    return {
      dispatch,
    }
  }, []);

  React.useEffect(() => {
    getData().then(todos => {
      dispatch(getTodos(todos));
      setInitialized(true);
    });
  }, []);

  React.useEffect(() => {
    if (initialized) {
      fetch('/api/todos', {
        method: 'POST',
        body: JSON.stringify(state.todos),
      });
    }
  }, [ initialized, state ]);

  return initialized 
    ? (
      <Provider value={context}>
        <h1>Tasks</h1>
        <TodoList todos={state.todos} />
      </Provider>
    )
    : (
      <Loading msg="Loading your tasks..."></Loading>
    );
}
