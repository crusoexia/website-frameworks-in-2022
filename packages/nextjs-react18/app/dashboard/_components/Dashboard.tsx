import DashboardPresentation from 'shared/dist/todo/components/DashboardPresentation';

async function getTodos() {
  const res = await fetch('http://localhost:3000/api/todos');

  if (!res.ok) {
    throw new Error('Fetch todos failed');
  }

  return res.json();
}

export default async function Dashboard() {
  const todos = await getTodos();

  return (
    <DashboardPresentation todos={todos} />
  );
}
