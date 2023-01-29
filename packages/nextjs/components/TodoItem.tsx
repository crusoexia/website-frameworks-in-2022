import React from 'react';
import { TodosContext } from './TodosContext';
import { completeTodoAction, updateTodo } from '../todo/reducer';

export interface Props {
  id: string;
  todo: string;
  done: boolean;
}

const TodoItem = ({
  id,
  todo,
  done,
}: Props) => {
  const { dispatch } = React.useContext(TodosContext);

  const handleDoneChange = React.useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
    dispatch?.(completeTodoAction({
      id,
      done: event.target.checked,
    }));
  }, []);

  const handleTodoChange = React.useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
    dispatch?.(updateTodo({
      id,
      todo: event.target.value,
    }));
  }, []);

  return (
    <div className={`todo-item ${done ? 'todo-item-done' : ''}`}>
      <input type="checkbox" checked={done} onChange={handleDoneChange}/>
      <input className="todo-item-input" type="text" value={todo} onChange={handleTodoChange} disabled={done}/>
    </div>
  );
};

export default TodoItem;
