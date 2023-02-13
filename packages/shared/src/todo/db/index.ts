import { Todo } from '../domain';

let todos: Todo[] = [
  { id: '1', todo: 'Check the email list.', done: false },
  { id: '2', todo: 'Prepare the sharing.', done: false },
  { id: '3', todo: 'Watch the movie.', done: true },
];

export function getTodos() {
  return todos;
}

export function updateTodos (newTodos: Todo[]) {
  todos = newTodos;
}
