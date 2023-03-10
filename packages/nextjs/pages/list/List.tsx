import React from 'react';
import TodoList from 'shared/dist/todo/components/TodoList';
import { reducer } from 'shared/dist/todo/reducer';
import { Provider } from 'shared/dist/todo/components/TodosContext';
import {Todo} from 'shared/dist/todo/domain';

export default function List({ todos }: { todos: Todo[] }) {
  const [ state, dispatch ] = React.useReducer(reducer, { todos });
  const context = React.useMemo(() => {
    return {
      dispatch,
    }
  }, []);

  React.useEffect(() => {
    if (state.todos === todos) {
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
