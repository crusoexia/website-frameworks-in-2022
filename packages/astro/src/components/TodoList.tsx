import React from 'react';
import TodoList from 'shared/todo/components/TodoList';
import { reducer, getTodos } from 'shared/todo/reducer';
import { Provider } from 'shared/todo/components/TodosContext';

export default function List() {
  const [ state, dispatch ] = React.useReducer(reducer, { todos: [] });
  const context = React.useMemo(() => {
    return {
      dispatch,
    }
  }, []);

  React.useEffect(() => {
    (async () => {
      const resp = await fetch('/api/todos');    
      const data = await resp.json();
      dispatch(getTodos(data));
    })();
  }, []);

  React.useEffect(() => {
    if (!state.initialized) {
      return;
    }

    fetch('/api/todos', {
      method: 'POST',
      body: JSON.stringify(state.todos),
    });
  }, [ state ]);

  return (
    <Provider value={context}>
      <h1>Tasks</h1>
      <TodoList todos={state.todos} />
    </Provider>
  );
}
