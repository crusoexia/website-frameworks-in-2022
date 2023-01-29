import type { NextApiRequest, NextApiResponse } from 'next';
import { Todo } from '../../domain';

const todos: Todo[] = [
  { id: '1', todo: 'Check the email list.', done: false },
  { id: '2', todo: 'Prepare the sharing.', done: false },
  { id: '3', todo: 'Watch the movie.', done: true },
];

export default function handler(
  _req: NextApiRequest,
  res: NextApiResponse,
) {
  res.status(200).json(todos);
}
