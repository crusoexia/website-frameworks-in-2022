import dns from 'node:dns';
import DashboardPresentation from 'shared/dist/todo/components/DashboardPresentation';

async function getTodos() {
  dns.setDefaultResultOrder('ipv4first');
  const res = await fetch('http://localhost:3000/api/todos', {
    // Uncomment to switch SSG to Dynamic Server side rendering
    //cache: 'no-store',
    //next: {
      //revalidate: 5, // seconds
    //}
  });

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
