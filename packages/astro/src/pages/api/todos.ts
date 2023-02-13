import { getTodos, updateTodos } from 'shared/todo/db';

export async function get({ params }) {
  return new Response(JSON.stringify(getTodos()), {
    status: 200,
    headers: {
      'Content-Type': 'application/json',
    },
  });
}

export async function post({ request }) {
  updateTodos(await request.json());
  return new Response('ok', {
    status: 200,
  });
}
