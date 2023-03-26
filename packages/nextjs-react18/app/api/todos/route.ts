import { getTodos, updateTodos } from 'shared/dist/todo/db';

export async function GET(request: Request) {
  const todos = getTodos();

  console.log('todos[GET]:', todos);
  return new Response(new Blob([ JSON.stringify(todos, null, 2) ], {
    type: 'application/json',
  }));
}

export async function POST(request: Request) {
  const newTodos = await request.json();

  console.log('update todos:', newTodos);
  updateTodos(newTodos);

  return new Response();
}
