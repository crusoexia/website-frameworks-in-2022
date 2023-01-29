import React from 'react';
import TodoList from '../../components/TodoList';
import { reducer } from '../../todo/reducer';
import { Provider } from '../../components/TodosContext';

export default function List() {
  const [ state, dispatch ] = React.useReducer(reducer, { todos: [] });
  const context = React.useMemo(() => {
    return {
      dispatch,
    }
  }, []);

  return (
    <Provider value={context}>
      <TodoList todos={state.todos} />
    </Provider>
  );
}
