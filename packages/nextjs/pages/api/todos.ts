import type { NextApiRequest, NextApiResponse } from 'next';
import { Todo } from '../../domain';

let todos: Todo[] = [
  { id: '1', todo: 'Check the email list.', done: false },
  { id: '2', todo: 'Prepare the sharing.', done: false },
  { id: '3', todo: 'Watch the movie.', done: true },
];

export function getTodos() {
  return todos;
}

function updateTodos (newTodos: Todo[]) {
  todos = newTodos;
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  switch (req.method) {
    case 'GET':
      console.log('get todos:', getTodos());
      res.status(200).json(getTodos());
      break;
    case 'POST':
      const newTodos = JSON.parse(req.body);
      console.log('update todos:', newTodos);
      updateTodos(newTodos);
      res.status(200).send('OK');
      break;
  }
}
