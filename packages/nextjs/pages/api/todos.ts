import type { NextApiRequest, NextApiResponse } from 'next';
import { getTodos, updateTodos } from 'shared/dist/todo/db';

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
