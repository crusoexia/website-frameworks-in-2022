import produce from 'immer';
import { Action, Todo } from '../domain';

export const COMPLETE_TODO = 'completeTodoAction';
export const UPDATE_TODO = 'updateTodo';
export const CREATE_TODO = 'createTodo';

interface CompleteTodoPayload {
 id: string;
 done: boolean;
}

interface UpdateTodoPayload {
  id: string;
  todo: string;
}

export function completeTodoAction(payload: CompleteTodoPayload): Action<CompleteTodoPayload> {
  return {
    type: COMPLETE_TODO,
    payload,
  };
}

export function updateTodo(payload: UpdateTodoPayload): Action<UpdateTodoPayload> {
  return {
    type: UPDATE_TODO,
    payload,
  };
}

export function createTodo(payload: string): Action<string> {
  return {
    type: CREATE_TODO,
    payload,
  };
}

export function reducer(state: { todos: Todo[] }, action: Action) {
  switch(action.type) {
    case COMPLETE_TODO:
      return produce(state, draft => {
        const todo = draft.todos.find(({id}) => id === (action.payload as CompleteTodoPayload).id) as Todo;
        todo.done = (action.payload as CompleteTodoPayload).done;
      });
    case CREATE_TODO:
      return produce(state, draft => {
        draft.todos.push({
          id: Math.random().toString().slice(2),
          todo: action.payload as string,
          done: false,
        });
      });
    case UPDATE_TODO:
      return produce(state, draft => {
        const todo = draft.todos.find(({id}) => id === (action.payload as UpdateTodoPayload).id) as Todo;
        todo.todo = (action.payload as UpdateTodoPayload).todo;
    });
    default:
      return state;
  }
}
