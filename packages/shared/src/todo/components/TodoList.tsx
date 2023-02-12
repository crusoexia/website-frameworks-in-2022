import React from 'react';
import type { Todo } from '../domain';
import TodoItem from './TodoItem';
import { TodosContext } from './TodosContext';
import { createTodo } from '../reducer';

export interface Props {
  todos: Todo[];
}

const TodoList = ({ todos }: Props) => {
  const [newTodo, setNewTodo] = React.useState('');
  const { dispatch } = React.useContext(TodosContext);
  const handleNewTodoChange = React.useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
    setNewTodo(event.target.value);
  }, []);
  const handleNewTodoKeydown = React.useCallback((event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.code === 'Enter' && !!newTodo.trim()) {
      dispatch?.(createTodo(newTodo));
      setNewTodo('');
    }
  }, [ newTodo ]);

  return (
    <ul className="todo-list">
      {
        todos?.map(({ id, todo, done }: Todo) => {
          return (
            <li key={id}>
              <TodoItem id={id} todo={todo} done={done}/>
              </li>
          );
        })
      }
      <li>
        <div className="todo-item">
          <span className="todo-item-add-icon">+</span>
          <input 
            className="todo-item-input"
            type="text" 
            placeholder="Add todo" 
            value={newTodo} 
            onChange={handleNewTodoChange} 
            onKeyDown={handleNewTodoKeydown}/>
        </div>
      </li>
    </ul>
  )
};

export default TodoList;
